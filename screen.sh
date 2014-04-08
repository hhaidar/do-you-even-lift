#!/bin/sh

LOGFILE='/tmp/debug.log'
#LOGFILE='/dev/null'

export DISPLAY=:0
nohup matchbox-window-manager >> $LOGFILE &
nohup npm start >> $LOGFILE &
nohup chromium-browser --kiosk http://localhost:5000/ >> $LOGFILE &
