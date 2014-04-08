#!/bin/sh
matchbox-window-manager &
npm start >> ~/errors.log
export DISPLAY=:0
chromium-browser --kiosk http://localhost:5000/
