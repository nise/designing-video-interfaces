# HowTo:
# 1. Open R in command line by opening the command line tool of your choice and typing: R
# 2. Open source this file: source("kappa.R") 

library(irr)

setwd("/home/abb/Documents/www2/video-patterns/")


# load data
d <- read.table("./data/pattern-interrater3.csv", sep=",", stringsAsFactors=FALSE, header=TRUE, fill=TRUE)

d

#d <- d.df[, c(1, 2)]

r <- kappa2(d[,c(2,3)], "unweighted")

r
