# 🔑 passdom 🔑


We use passwords daily.But did we have any good way to store passwords.
For web we have browsers to store password, but what about CLI, terminals.

passdom is here for help.
passdom is a CLI tool, built to help  you store yout credentials on the Command line or terminal

It takes less than 10 second to store your password and less than a second to retrieve them. You can store passwords for multiple websites and tools.


## Installation 📥
> Install globally to use in any directory.
```
$ npm install -g passdom
```

## Basic Usage 📒
```js
passdom -a <website name> // to add your credentials, it will ask you your credentials {Website name is the name of site of which you ave to add credentials}

passdom <website name> //to find the credentials of the given website

passdom -r <website name> // to remove the credentials of given website
```
```js
passdom add <website name> // to add your credentials, it will ask you your credentials {Website name is the name of site of which you ave to add credentials}

passdom <website name> //to find the credentials of the given website

passdom remove <website name> // to remove the credentials of given website

```

## Privacy 🔒

We respect your privacy and are constantly working on it.
All the credentials are stored on your local computer, so any third party can't get access to them other than you.

## Contribute 📂

If you want to contribute, check out the GITHUB repository 
https://github.com/zeel-pathak/passdom

Contributions are welcome!!
 
## Open Source 👐

Hell Yeah

CodeBin can easily be installed in your networks, and it is all Free and Open Source
* [ Source Code ] -> https://github.com/zeel-pathak/passdom

## Future update 🔥

* Currently, passdom can only store one credential for a particular website, we want passdom to be able to store multiple credentials for a website.
* Finding of credentials should be made more easy.
* Extra flags should be added to help and made it easy to use as well as a flag to list all credentials.
* Should ask again for confirmation while removing.