# SGP_keyshort

### Introduction 
This is a Google Chrome extension to generate a supergenpass password by pressing `Ctrl + 1`. (`Ctrl + 2` lets you specify a domain)
It also has an embeded supergenpass password popup button which shows you the standard supergenpass/mobile like interface.

### Usage
Download the code ether by downloading the zip and unpacking it or by doing a `git clone`. In Google Chrome then open the extensions menu and tick the 'Develeloper mode' tickbox up top. After doing that you should be able to point Chrome to the folder by clicking the 'Load unpacked extension...' button.


### Known issues 
* Does not work for modal windows on fastmail.fm
* Does not work on aws account sign on on urls like https://&lt;account id&gt;signin.aws.amazon.com/console/

### Todo

* Fix above issues.
* Add options menu to set password lenth, salt and hash algoritm. (merge with popup...)
* Add support for [clippy][1].


### Credits...
* All of the supergenpass code and popup html from https://github.com/chriszarate/supergenpass/
    
[1]: https://github.com/mojombo/clippy