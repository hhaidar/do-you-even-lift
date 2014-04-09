#!/bin/sh

LOGFILE='/tmp/debug.log'
#LOGFILE='/dev/null'

if [ `/usr/bin/git diff origin | wc -l` -gt 2 ]; then
  cd /home/pi/your-face-masterpiece && /usr/bin/git pull >> $LOGFILE
  killall -HUP chromium >> $LOGFILE
fi
