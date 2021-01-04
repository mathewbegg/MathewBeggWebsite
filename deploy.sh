#!/bin/bash
distributionID=E2JKNH26NX9G6F
sourceDirectory=./dist/MathewBeggWebsite
destinationDirectory=s3://mathewbegg.com

ECHO =================================
ECHO Intalling Dependencies
ECHO =================================
npm install

ECHO =================================
ECHO Building Project
ECHO =================================
ng build --prod

ECHO =================================
ECHO Syncing to s3
ECHO =================================
aws s3 sync $sourceDirectory $destinationDirectory --delete

ECHO =================================
ECHO Invalidating Index.html in Cloudfront Distribution
ECHO =================================
aws cloudfront create-invalidation --distribution-id $distributionID --paths  "//index.html" "/assets/*"