var mongoose = require("mongoose"),
  Images = mongoose.model("Images"),
  Portals = mongoose.model("Portals"),
  fs = require("node-fs"),
  mv = require("mv"),
  path = require("path"),
  csv = require("csv");
/*
 **/
exports.maintain = async function () {
  try {
    const imgs = await Images.find().exec();
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].url = imgs[i].url.replace("/vi-lab/", "/static/");
      imgs[i].save();
    }
  } catch (err) {
    console.error(err);
  }
};

/*
Import files from upload folder into database and moves the files into another folder
status: unfinished
- move files fails
**/
exports.folderImport = async function (req, res) {
  // flush database in order to reload the images later on
  try {
    await Images.deleteMany({});
    console.log("collection of images removed");

    const existing_images = await Images.find().sort("filename").exec();
    var source_dir = "./public/vi-lab/img/screenshots";
    var dest_dir = "./public/vi-lab/img/screenshots";
    var files = fs.readdirSync(source_dir);
    for (var i in files) {
      if (!files.hasOwnProperty(i)) continue;
      if (files[i].slice(-1) === "~") {
        break;
      }
      var file_stats = fs.statSync(source_dir + "/" + files[i]);
      if (file_stats.isDirectory()) {
        // getFiles(dir, files[i]);
      } else {
        var prep = function (str) {
          //							var arr = .split(/\ /);
          if (str === "app") {
            return "";
          }
          return str.replace(/-/g, " ").toLowerCase();
        };
        var portall = files[i].split("_")[1];
        var pattern = [];
        pattern.push(prep(files[i].split("_")[0]));
        var img = new Images({
          filename: files[i],
          url: dest_dir.slice(1).replace(/\/public/, "") + "/" + files[i],
          caption: "",
          tags: pattern,
          portal:
            portall == undefined
              ? "unknown"
              : portall.replace(/-/g, " ").replace(".png", ""),
          file_modified_at: file_stats.mtime,
          file_created_at: file_stats.ctime,
          updated_at: Date.now(),
        });
        await img.save();
        console.log("saved: " + dest_dir.slice(1) + "/" + files[i]);
      }
    } // end for
  } catch (err) {
    console.error(err);
  }
};
/*
 * Validates the images against the portals
 **/
exports.validate = async function (req, res) {
  try {
    const images = await Images.find().sort("filename").exec();
    const portals = await Portals.find().exec();

    for (var i = 0; i < images.length; i++) {
      if (images[i].tags.length === 0) {
        console.log("no pattern related: " + images[i].name);
      }
      if (images[i].tags.portal === "") {
        console.log("no portal related: " + images[i].name);
      }
      if (images[i].tags.caption === "") {
        console.log("no caption found: " + images[i].name);
      }
    }
    var flag = false;
    console.log(
      "The following images (filenames) are not related to a portal.\n These files could be moved into a different folder."
    );
    for (var i = 0; i < images.length; i++) {
      for (var j = 0; j < portals.length; j++) {
        if (
          portals[j].name.toLowerCase().replace(/-/g, " ") ===
          images[i].portal.toLowerCase().replace(/-/g, " ")
        ) {
          flag = true;
        }
      }
      if (flag === false) {
        console.log(
          " cp ./" + images[i].filename + " ../screenshots-unsorted/ ;"
        );
      }
      flag = false;
    }
  } catch (err) {
    console.error(err);
    res.end();
  }
};

/*
 **/
exports.list = async function (req, res) {
  try {
    const images = await Images.find().sort("filename").exec();
    res.render("images", {
      items: images,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching images");
  }
};

/*
 **/
exports.getJSONImagePerFilename = async function (req, res) {
  try {
    const image = await Images.find({ filename: req.params.filename }).exec();
    res.jsonp(image);
  } catch (err) {
    console.error(err);
    res.status(500).jsonp({ error: "Error fetching image" });
  }
};

/*
 **/
exports.getJSONImagePerPattern = async function (req, res) {
  try {
    const image = await Images.aggregate([
      {
        $match: { tags: req.params.pattern },
      },
      {
        $project: {
          caption: 1,
          caption_length: 1,
          portal: 1,
          url: 1,
          filename: 1,
          portal_lower: { $toLower: "$portal" }, //,
          //       "caption_length": { $strLenCP: "$caption" } // requires MongoDb 3.4
        },
      } /*,
      { "$sort": { "caption_length": -1 } }*/,
    ])
      .sort({ caption_length: -1 })
      .exec();
    res.jsonp(image);
  } catch (err) {
    console.error(err);
    res.status(500).jsonp({ error: "Error fetching image" });
  }
};

/*
 * Returns a JSON object conaining all images related to the given portal
 * status: finished
 **/
exports.getJSONImagePerPortal = async function (req, res) {
  try {
    const image = await Images.find({
      portal: req.params.portal.replace(/_/g, " "),
    }).exec();
    res.jsonp(image);
  } catch (err) {
    console.error(err);
    res.status(500).jsonp({ error: "Error fetching image" });
  }
};

/*
 **/
exports.update = async function (req, res) {
  try {
    const image = await Images.findById(req.params.id);
    if (!image) {
      return res.status(404).send("Image not found");
    }
    image.portal = req.body.portal;
    image.caption = req.body.caption;
    image.caption_length =
      req.body.caption === "" ? 0 : req.body.caption.length;
    image.tags = String(req.body.tags).split(",");
    image.updated_at = Date.now();
    console.log(image.caption_length);
    await image.save();
    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating image");
  }
};

/*
 **/
exports.edit = async function (req, res) {
  try {
    const items = await Images.find().sort("portal").lean().exec();
    res.render("images-edit", {
      items: items,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching images");
  }
};

// remove todo item by its id
exports.destroy = async function (req, res) {
  try {
    const img = await Images.findById(req.params.id);
    if (!img) {
      return res.status(404).send("Image not found");
    }
    await img.remove();
    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting image");
  }
};

/*
REST API CALL
**/
exports.getJSON = async function (req, res) {
  try {
    const docs = await Images.find().sort("filename").lean().exec();
    res.jsonp(docs);
  } catch (err) {
    console.error(err);
    res.status(500).jsonp({ error: "Error fetching images" });
  }
};
