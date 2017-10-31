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

Apk: https://github.com/Zekke/get-drunk/tree/master/platforms/android/build/outputs/apk

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
