#!/bin/sh

LOGFILE='/home/pi/your-face-masterpiece.log'
cd /home/pi/your-face-masterpiece
if /usr/bin/git pull | grep -vq 'Already up-to-date.'; then
  killall -HUP chromium >> $LOGFILE
  echo "Updated from Git at `date`" >> $LOGFILE
 /home/pi/your-face-masterpiece/deploy.sh >> $LOGFILE
fi
