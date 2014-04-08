#!/bin/sh

LOGFILE='/tmp/debug.log'
#LOGFILE='/dev/null'

cd /home/pi/your-face-masterpiece && git pull >> $LOGFILE
