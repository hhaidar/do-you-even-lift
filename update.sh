#!/bin/sh

LOGFILE='/home/pi/your-face-masterpiece.log'

if [ `/usr/bin/git diff origin | wc -l` -gt 2 ]; then
  cd /home/pi/your-face-masterpiece && /usr/bin/git pull >> $LOGFILE
  killall -HUP chromium >> $LOGFILE
fi
