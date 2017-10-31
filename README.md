This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

Voici le projet Get Drunk par [Clément Dahi](clement.dahi@epitech.eu).
## Présentation
*(M - Mobile Hybrid - Project) (PAR-9-1)*

L'application Get Drunk a pour but de permettre à mon groupe de potes de se retrouver facilement lorsqu'on décide de se cuiter quelque part dans Paris.

### Développeur
Clément Dahi - Aucune connaissance en langages web ni en développement mobile lors de la réalisation de ce projet, je n'ai pu assister qu'au tout premier cours du module (celui du jeudi).

### Projet
Framework: Ionic3

Api native utilisée: Géolocalisation

Réception de notifications : Oui (Firebase)

#### Push de notifications
http://onlinecurl.com/

```bash
curl -X POST \
  https://fcm.googleapis.com/fcm/send \
  -H 'authorization: key=AAAAibLopao:APA91bG_TvKBFerkmNbYEiITP7wiNzFYflXDucJPVlyQSzQZZlhj4C_AVRlJb-AZbOfeoF-q6yRbIkmyHcKc0nvINAFNth8IM05LGNVtWUFCBmcsObtwDkP-a1LKzSzTHXEBXdBQ21pi' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"to": "/topics/all",
	"notification": {
	    "title": "Hello World!",
	    "body": "Proin rutrum, nunc vitae porta volutpat, mi nibh.",
        "icon": "fcm_push_icon",
    	"color": "#F79838",
        "sound":"default"
	},
	"priority": "high",
        "click_action":"FCM_PLUGIN_ACTIVITY"
}'
```

ToDo : Implémentation d'un bouton permettant de POST une notification vers Firebase, informant les autres personnes que l'utilisateur est en route pour un bar.
