# SGP_keyshort

### Introduction 
This is a Google Chrome extension to generate a supergenpass password by pressing `Ctrl + 1`. (`Ctrl + 2` lets you specify a domain). 
The password field turns light green when the password has been recalculated.
It also has an embedded supergenpass password popup button which shows you the standard supergenpass/mobile like interface. When clicking
the button to generate the password in the popup the generated password will be posted back to the form.

This project is mainly for me to learn about chrome extensions, javascript and jquery... Feel free to contribute.

### Installation
Download the code ether by downloading the zip and unpacking it or by doing a `git clone`. In Google Chrome then open the extensions menu and tick the 'Developer mode' tick box up at the top. After doing that you should be able to point Chrome to the folder by clicking the 'Load unpacked extension...' button. 


### Known issues 

* Does not work for modal windows on fastmail.fm
* Does not work on aws account sign on on urls like https://&lt;account id&gt;signin.aws.amazon.com/console/


### Todo

* Fix above issues. (workaround is to use the extension popup)
* Add options menu to set password lenth, salt and hash algoritm. (merge with popup...)

### Credits...
* All of the supergenpass code and popup html from https://github.com/chriszarate/supergenpass/