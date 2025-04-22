import { Question } from '../types'

export const servicios_old: Question[] = [
  {
    question:
      "¿Cuál es la característica principal del modelo de cómputo en la nube 'pay-as-you-go'?",
    options: [
      'Pago por capacidad reservada',
      'Pago solo por recursos consumidos',
      'Costos fijos mensuales',
      'Inversión inicial en hardware',
    ],
    correctAnswer: 'Pago solo por recursos consumidos',
  },
  {
    question:
      '¿Qué tipo de nube combina infraestructura pública y privada?',
    options: [
      'Nube comunitaria',
      'Nube híbrida',
      'Nube dedicada',
      'Nube distribuida',
    ],
    correctAnswer: 'Nube híbrida',
  },
  {
    question:
      '¿Qué servicio en la nube permite ejecutar código en respuesta a eventos sin gestionar servidores?',
    options: ['IaaS', 'PaaS', 'SaaS', 'FaaS'],
    correctAnswer: 'FaaS',
  },
  {
    question:
      '¿Qué tecnología permite ejecutar múltiples sistemas operativos en un mismo hardware físico?',
    options: ['Contenedores', 'Virtualización', 'Blockchain', 'CDN'],
    correctAnswer: 'Virtualización',
  },
  {
    question: '¿Cuál es un ejemplo de Plataforma como Servicio (PaaS)?',
    options: [
      'AWS EC2',
      'Google App Engine',
      'Microsoft Office 365',
      'Dropbox',
    ],
    correctAnswer: 'Google App Engine',
  },
  {
    question:
      '¿Qué herramienta se utiliza para orquestar contenedores en clústeres?',
    options: [
      'Docker Compose',
      'Kubernetes',
      'GitHub Actions',
      'Jenkins',
    ],
    correctAnswer: 'Kubernetes',
  },
  {
    question:
      '¿Qué ventaja principal ofrece la computación sin servidor?',
    options: [
      'Control total del hardware',
      'Pago por servidores reservados',
      'Escalabilidad automática',
      'Mayor latencia en ejecución',
    ],
    correctAnswer: 'Escalabilidad automática',
  },
  {
    question:
      '¿Qué tipo de instancia en la nube ofrece mayores descuentos por compromiso a largo plazo?',
    options: [
      'Instancias bajo demanda',
      'Instancias reservadas',
      'Instancias spot',
      'Instancias dedicadas',
    ],
    correctAnswer: 'Instancias reservadas',
  },
  {
    question:
      '¿Qué servicio de AWS se utiliza para máquinas virtuales escalables?',
    options: ['S3', 'Lambda', 'EC2', 'RDS'],
    correctAnswer: 'EC2',
  },
  {
    question:
      '¿Qué estrategia ayuda a reducir costos en máquinas virtuales mediante ajuste dinámico de recursos?',
    options: [
      'Almacenamiento en caché',
      'Escalado automático',
      'Respaldo manual',
      'Virtualización anidada',
    ],
    correctAnswer: 'Escalado automático',
  },
  {
    question:
      '¿Qué característica define a los contenedores frente a las máquinas virtuales?',
    options: [
      'Requieren hipervisores tipo 1',
      'Comparten el kernel del host',
      'Mayor consumo de recursos',
      'Necesitan sistema operativo completo',
    ],
    correctAnswer: 'Comparten el kernel del host',
  },
  {
    question:
      '¿Qué servicio de Google Cloud es un ejemplo de Functions como Servicio (FaaS)?',
    options: [
      'Google Compute Engine',
      'Google Cloud Functions',
      'Google Kubernetes Engine',
      'Google BigQuery',
    ],
    correctAnswer: 'Google Cloud Functions',
  },
  {
    question:
      '¿Cuál es un caso de uso típico de las instancias spot en la nube?',
    options: [
      'Bases de datos transaccionales',
      'Aplicaciones críticas de tiempo real',
      'Procesamiento de datos tolerante a interrupciones',
      'Servidores de correo empresarial',
    ],
    correctAnswer: 'Procesamiento de datos tolerante a interrupciones',
  },
  {
    question:
      '¿Qué tecnología se utiliza para empaquetar aplicaciones con sus dependencias?',
    options: ['VPN', 'Docker', 'HTTP/HTTPS', 'DNS'],
    correctAnswer: 'Docker',
  },
  {
    question:
      '¿Qué modelo de cómputo en la nube gestiona completamente el sistema operativo y el middleware?',
    options: ['IaaS', 'PaaS', 'SaaS', 'CaaS'],
    correctAnswer: 'PaaS',
  },
  {
    question:
      "¿Qué problema aborda el principio de 'elasticidad' en la nube?",
    options: [
      'Seguridad de datos',
      'Variabilidad en la demanda de recursos',
      'Compatibilidad de sistemas operativos',
      'Latencia de red',
    ],
    correctAnswer: 'Variabilidad en la demanda de recursos',
  },
  {
    question:
      '¿Qué servicio es un ejemplo de Software como Servicio (SaaS)?',
    options: [
      'AWS Lambda',
      'Microsoft Azure Virtual Machines',
      'Google Drive',
      'Kubernetes',
    ],
    correctAnswer: 'Google Drive',
  },
  {
    question:
      '¿Qué herramienta de AWS permite ejecutar funciones sin servidor?',
    options: ['EC2', 'S3', 'Lambda', 'Redshift'],
    correctAnswer: 'Lambda',
  },
  {
    question: '¿Cuál es un desafío de la computación sin servidor?',
    options: [
      'Alto costo de infraestructura',
      'Dependencia del proveedor',
      'Escalabilidad limitada',
      'Complejidad en la virtualización',
    ],
    correctAnswer: 'Dependencia del proveedor',
  },
  {
    question:
      '¿Qué tipo de almacenamiento es adecuado para datos de acceso esporádico?',
    options: [
      'SSD de alto rendimiento',
      'Almacenamiento en caché',
      'Almacenamiento en frío (Cold Storage)',
      'Discos locales temporales',
    ],
    correctAnswer: 'Almacenamiento en frío (Cold Storage)',
  },
  {
    question: '¿Qué servicio administrado de Kubernetes ofrece Azure?',
    options: ['EKS', 'GKE', 'AKS', 'OpenShift'],
    correctAnswer: 'AKS',
  },
  {
    question: '¿Qué ventaja ofrecen las instancias reservadas?',
    options: [
      'Flexibilidad para terminar en cualquier momento',
      'Descuentos por compromiso a largo plazo',
      'Prioridad en la ejecución',
      'Acceso físico al hardware',
    ],
    correctAnswer: 'Descuentos por compromiso a largo plazo',
  },
  {
    question: '¿Qué característica es clave en los contenedores?',
    options: [
      'Aislamiento completo del hardware',
      'Portabilidad entre entornos',
      'Requieren hipervisores',
      'Alto consumo de memoria',
    ],
    correctAnswer: 'Portabilidad entre entornos',
  },
  {
    question:
      '¿Qué modelo de cómputo se enfoca en ejecutar código en respuesta a eventos?',
    options: ['IaaS', 'Serverless', 'PaaS', 'SaaS'],
    correctAnswer: 'Serverless',
  },
  {
    question:
      '¿Qué servicio usaría para alojar una aplicación web con escalado automático en AWS?',
    options: ['EC2', 'Elastic Beanstalk', 'S3', 'CloudFront'],
    correctAnswer: 'Elastic Beanstalk',
  },
  {
    question:
      '¿Qué tecnología permite la gestión automatizada de contenedores en clústeres?',
    options: ['Docker Compose', 'Kubernetes', 'GitLab CI', 'Terraform'],
    correctAnswer: 'Kubernetes',
  },
  {
    question:
      '¿Qué es una ventaja de los servicios administrados de cómputo?',
    options: [
      'Control total sobre el hardware',
      'Reducción de costos operativos',
      'Mayor latencia en despliegues',
      'Dependencia de configuraciones manuales',
    ],
    correctAnswer: 'Reducción de costos operativos',
  },
  {
    question:
      '¿Qué tipo de instancia virtual está físicamente aislada para un solo cliente?',
    options: [
      'Instancias spot',
      'Instancias dedicadas',
      'Instancias reservadas',
      'Instancias preemptivas',
    ],
    correctAnswer: 'Instancias dedicadas',
  },
  {
    question:
      '¿Qué servicio de Google Cloud se utiliza para entrenar modelos de IA?',
    options: [
      'Google App Engine',
      'Google Compute Engine',
      'Google Cloud Functions',
      'Google Kubernetes Engine',
    ],
    correctAnswer: 'Google Compute Engine',
  },
  {
    question:
      '¿Qué estrategia ayuda a optimizar costos en almacenamiento?',
    options: [
      'Usar solo discos SSD',
      'Eliminar datos no utilizados',
      'Almacenar todo en caché',
      'Comprar hardware físico',
    ],
    correctAnswer: 'Eliminar datos no utilizados',
  },
  {
    question:
      '¿Qué define principalmente a la computación en el borde (Edge Computing)?',
    options: [
      'Procesamiento centralizado en grandes centros de datos',
      'Ejecución de código en dispositivos cercanos al origen de datos',
      'Uso exclusivo de redes cableadas',
      'Dependencia de servidores físicos locales',
    ],
    correctAnswer:
      'Ejecución de código en dispositivos cercanos al origen de datos',
  },
  {
    question:
      '¿Qué herramienta se usa para construir imágenes de contenedores sin un demonio?',
    options: ['Docker', 'Buildah', 'Podman', 'LXC'],
    correctAnswer: 'Buildah',
  },
  {
    question:
      '¿Qué modelo de despliegue usa Netflix?',
    options: [
      'Nube privada',
      'Nube híbrida',
      'Multinube',
      'Nube comunitaria',
    ],
    correctAnswer: 'Nube híbrida',
  },
  {
    question:
      '¿Qué servicio es responsable de la orquestación de contenedores en AWS?',
    options: ['ECS', 'Lambda', 'S3', 'Redshift'],
    correctAnswer: 'ECS',
  },
  {
    question:
      '¿Qué característica es esencial en la computación sin servidor?',
    options: [
      'Gestión manual de servidores',
      'Ejecución basada en eventos',
      'Uso exclusivo de contenedores',
      'Alta inversión en hardware',
    ],
    correctAnswer: 'Ejecución basada en eventos',
  },
  {
    question:
      '¿Qué tipo de instancia VM es ideal para cargas de trabajo con GPU?',
    options: [
      'Propósito general',
      'Optimizadas para computación',
      'Aceleradas por GPU',
      'Optimizadas para memoria',
    ],
    correctAnswer: 'Aceleradas por GPU',
  },
  {
    question:
      '¿Qué servicio de Microsoft Azure ejecuta funciones sin servidor?',
    options: [
      'Azure VMs',
      'Azure Functions',
      'Azure SQL',
      'Azure DevOps',
    ],
    correctAnswer: 'Azure Functions',
  },
  {
    question: '¿Qué ventaja ofrecen los contenedores frente a las VMs?',
    options: [
      'Mayor seguridad por aislamiento',
      'Menor consumo de recursos',
      'Compatibilidad con cualquier hipervisor',
      'Ejecución de sistemas operativos heterogéneos',
    ],
    correctAnswer: 'Menor consumo de recursos',
  },
  {
    question: '¿Qué modelo de servicio incluye Google App Engine?',
    options: ['IaaS', 'PaaS', 'SaaS', 'FaaS'],
    correctAnswer: 'PaaS',
  },
  {
    question:
      "¿Qué tecnología se asocia con la virtualización 'bare-metal'?",
    options: [
      'Hipervisor tipo 1',
      'Hipervisor tipo 2',
      'Contenedores Docker',
      'Kubernetes',
    ],
    correctAnswer: 'Hipervisor tipo 1',
  },
  {
    question:
      '¿Qué servicio administrado es ideal para aplicaciones con microservicios?',
    options: [
      'AWS Lambda',
      'Google Kubernetes Engine',
      'Azure Virtual Machines',
      'Amazon S3',
    ],
    correctAnswer: 'Google Kubernetes Engine',
  },
  {
    question:
      '¿Qué principio de seguridad en la nube garantiza que los datos no sean modificados ilegítimamente?',
    options: [
      'Confidencialidad',
      'Integridad',
      'Disponibilidad',
      'Autenticación',
    ],
    correctAnswer: 'Integridad',
  },
  {
    question:
      '¿Qué herramienta se utiliza para gestionar pipelines CI/CD con contenedores?',
    options: [
      'Jenkins',
      'GitHub Actions',
      'Docker Swarm',
      'Todas las anteriores',
    ],
    correctAnswer: 'Todas las anteriores',
  },
  {
    question:
      '¿Qué tipo de nube es gestionada exclusivamente por una única organización?',
    options: [
      'Nube pública',
      'Nube privada',
      'Nube híbrida',
      'Multinube',
    ],
    correctAnswer: 'Nube privada',
  },
  {
    question:
      '¿Qué servicio permite ejecutar código en respuesta a cambios en una base de datos?',
    options: [
      'AWS EC2',
      'Azure Functions',
      'Google BigQuery',
      'IBM Cloud Storage',
    ],
    correctAnswer: 'Azure Functions',
  },
  {
    question:
      '¿Qué estrategia reduce costos al usar capacidad no utilizada del proveedor?',
    options: [
      'Instancias reservadas',
      'Instancias spot',
      'Instancias dedicadas',
      'Instancias bajo demanda',
    ],
    correctAnswer: 'Instancias spot',
  },
  {
    question: '¿Qué característica define a Kubernetes?',
    options: [
      'Virtualización de hardware',
      'Orquestación de contenedores',
      'Ejecución de funciones sin servidor',
      'Gestión de bases de datos relacionales',
    ],
    correctAnswer: 'Orquestación de contenedores',
  },
  {
    question:
      '¿Qué servicio de IBM Cloud se utiliza para funciones sin servidor?',
    options: [
      'IBM Watson',
      'IBM Cloud Functions',
      'IBM Cloud VPC',
      'IBM Db2',
    ],
    correctAnswer: 'IBM Cloud Functions',
  },
  {
    question: '¿Qué modelo de cómputo es usado por Salesforce?',
    options: ['IaaS', 'PaaS', 'SaaS', 'CaaS'],
    correctAnswer: 'SaaS',
  },
  {
    question:
      '¿Qué tecnología es clave para la portabilidad de aplicaciones en la nube híbrida?',
    options: [
      'Contenedores',
      'Máquinas virtuales',
      'Servidores físicos',
      'Redes privadas',
    ],
    correctAnswer: 'Contenedores',
  },
  {
    question:
      '¿Qué servicio de AWS está diseñado para análisis de big data?',
    options: ['AWS Lambda', 'Amazon Redshift', 'EC2', 'S3'],
    correctAnswer: 'Amazon Redshift',
  },
  {
    question:
      '¿Qué desafío presenta la computación cuántica en la nube?',
    options: [
      'Alto costo de implementación',
      'Baja velocidad de procesamiento',
      'Incompatibilidad con sistemas existentes',
      'Es una tecnología emergente con potencial',
    ],
    correctAnswer: 'Es una tecnología emergente con potencial',
  },
  {
    question:
      "¿Cuál es la definición de cómputo en la nube?",
    options: [
      "Entrega de recursos informáticos bajo demanda a través de Internet",
      "Uso exclusivo de servidores locales",
      "Implementación de aplicaciones sin conexión a la red",
      "Instalación de software en dispositivos personales",
    ],
    correctAnswer:
      "Entrega de recursos informáticos bajo demanda a través de Internet",
  },
  {
    question:
      "¿Cuál de las siguientes NO es una característica clave del cómputo en la nube?",
    options: [
      "Autoservicio bajo demanda",
      "Agrupación de recursos",
      "Requiere hardware dedicado en cada ubicación",
      "Escalabilidad rápida",
    ],
    correctAnswer: "Requiere hardware dedicado en cada ubicación",
  },
  {
    question:
      "¿Cuál es el rol de la virtualización en la computación en la nube?",
    options: [
      "Crear múltiples entornos de cómputo sobre un mismo hardware",
      "Aumentar la dependencia del hardware físico",
      "Reducir la eficiencia del uso de recursos",
      "Restringir el acceso remoto",
    ],
    correctAnswer:
      "Crear múltiples entornos de cómputo sobre un mismo hardware",
  },
  {
    question:
      "¿Cuáles son los modelos de despliegue de servicios en la nube?",
    options: [
      "Nube Pública, Nube Privada, Nube Híbrida y Multinube",
      "Nube Pública y Nube Privada únicamente",
      "Nube Híbrida y Nube Dedicada",
      "Nube Multinube y Nube PaaS",
    ],
    correctAnswer: "Nube Pública, Nube Privada, Nube Híbrida y Multinube",
  },
  {
    question:
      "¿Qué beneficio NO se asocia al cómputo en la nube?",
    options: [
      "Reducción de costos al eliminar la necesidad de infraestructura física propia",
      "Mayor disponibilidad mediante replicación de datos en múltiples ubicaciones",
      "Gestión manual intensiva de recursos",
      "Facilidad de gestión gracias a la automatización",
    ],
    correctAnswer: "Gestión manual intensiva de recursos",
  },
  {
    question:
      "¿Qué desafío del cómputo en la nube hay?",
    options: [
      "Seguridad y privacidad de los datos",
      "Reducción de costos operativos",
      "Facilidad de escalabilidad",
      "Automatización de procesos",
    ],
    correctAnswer: "Seguridad y privacidad de los datos",
  },
  {
    question:
      "¿Cuál es la característica que describe el modelo 'Pago por Uso' en el cómputo en la nube?",
    options: [
      "Se paga únicamente por los recursos consumidos",
      "Se paga una tarifa fija mensual sin importar el consumo",
      "Se requiere una inversión inicial elevada en infraestructura",
      "El pago se realiza anualmente sin flexibilidad",
    ],
    correctAnswer: "Se paga únicamente por los recursos consumidos",
  },
  {
    question:
      "¿Qué se entiende por 'Elasticidad' en los servicios de cómputo en la nube?",
    options: [
      "La capacidad de aumentar o reducir automáticamente los recursos según la demanda",
      "La estabilidad de los recursos sin cambios",
      "La necesidad de intervención manual para ajustar recursos",
      "La imposibilidad de escalar horizontalmente",
    ],
    correctAnswer:
      "La capacidad de aumentar o reducir automáticamente los recursos según la demanda",
  },
  {
    question:
      "¿Qué implica el principio de 'Acceso Remoto y Ubicuidad' en la computación en la nube?",
    options: [
      "Acceso a recursos desde cualquier ubicación con conexión a Internet",
      "Acceso exclusivo desde la red interna de una empresa",
      "Limitación geográfica estricta en el acceso a servicios",
      "Necesidad de conexión física a un servidor local",
    ],
    correctAnswer:
      "Acceso a recursos desde cualquier ubicación con conexión a Internet",
  },
  {
    question:
      "¿Qué se entiende por 'Agrupación de Recursos' en el contexto de la computación en la nube?",
    options: [
      "Compartir infraestructura para maximizar eficiencia y reducir costos",
      "Distribuir recursos en servidores aislados sin compartir",
      "Concentrar todos los recursos en un único servidor físico",
      "Aumentar la complejidad de la gestión de recursos",
    ],
    correctAnswer:
      "Compartir infraestructura para maximizar eficiencia y reducir costos",
  },
  {
    question:
      "¿Cuál es la principal diferencia entre IaaS y PaaS?",
    options: [
      "IaaS ofrece recursos virtualizados básicos y mayor control, mientras que PaaS proporciona entornos de desarrollo preconfigurados sin gestionar la infraestructura subyacente",
      "PaaS requiere gestión de hardware físico y IaaS automatiza el escalado",
      "IaaS solo se utiliza para almacenamiento y PaaS solo para aplicaciones móviles",
      "PaaS es más costoso y complejo que IaaS en todos los casos",
    ],
    correctAnswer:
      "IaaS ofrece recursos virtualizados básicos y mayor control, mientras que PaaS proporciona entornos de desarrollo preconfigurados sin gestionar la infraestructura subyacente",
  },
  {
    question:
      "¿Qué ejemplo puede ser usado para ilustrar el uso de IaaS?",
    options: [
      "Una empresa que desarrolla videojuegos usando AWS EC2 para probar configuraciones",
      "El uso de Google Drive para compartir documentos",
      "Desplegar una aplicación web sin necesidad de servidores",
      "Utilizar un servicio de mensajería instantánea en línea",
    ],
    correctAnswer:
      "Una empresa que desarrolla videojuegos usando AWS EC2 para probar configuraciones",
  },
  {
    question: "¿Cómo se describe el modelo SaaS?",
    options: [
      "Permite a los usuarios acceder a aplicaciones gestionadas a través de Internet sin instalación local",
      "Requiere la instalación manual de software en cada dispositivo",
      "Ofrece únicamente servicios de almacenamiento en la nube",
      "Exige la gestión completa de la infraestructura por parte del usuario",
    ],
    correctAnswer:
      "Permite a los usuarios acceder a aplicaciones gestionadas a través de Internet sin instalación local",
  },
  {
    question:
      "¿Cuál es uno de los ejemplos de SaaS?",
    options: [
      "Google Drive o Microsoft 365 para colaboración en documentos",
      "AWS Lambda para procesamiento de eventos",
      "Google App Engine para despliegue de código",
      "Amazon EC2 para pruebas de servidores",
    ],
    correctAnswer:
      "Google Drive o Microsoft 365 para colaboración en documentos",
  },
  {
    question:
      "¿Qué concepto diferencia la Computación sin Servidor (Serverless Computing) de otros modelos en la nube?",
    options: [
      "Los desarrolladores se enfocan en el código sin gestionar servidores, y el proveedor asigna recursos automáticamente",
      "Requiere la administración manual de cada servidor físico",
      "No permite escalabilidad automática",
      "Aumenta la dependencia en la infraestructura local",
    ],
    correctAnswer:
      "Los desarrolladores se enfocan en el código sin gestionar servidores, y el proveedor asigna recursos automáticamente",
  },
  {
    question:
      "En el contexto de FaaS, ¿cuál es una de sus principales ventajas?",
    options: [
      "Modelo de pago por ejecución que reduce costos operativos",
      "Requiere una infraestructura de servidores en ejecución permanente",
      "No permite la ejecución de funciones independientes",
      "Depende de la intervención manual para escalar",
    ],
    correctAnswer: "Modelo de pago por ejecución que reduce costos operativos",
  },
  {
    question:
      "¿Qué servicio es un ejemplo de funciones sin servidor (FaaS)?",
    options: [
      "AWS Lambda",
      "Amazon EC2",
      "Google Drive",
      "Azure Virtual Machines",
    ],
    correctAnswer: "AWS Lambda",
  },
  {
    question:
      "¿Qué característica comparten los modelos sin servidor con otros modelos de cómputo en la nube?",
    options: [
      "Escalabilidad automática en función de la demanda",
      "Necesidad de infraestructura física permanente",
      "Requiere actualizaciones manuales constantes",
      "Depende de instancias predefinidas sin flexibilidad",
    ],
    correctAnswer: "Escalabilidad automática en función de la demanda",
  },
  {
    question:
      "¿Qué son los servicios administrados de despliegue de aplicaciones web?",
    options: [
      "Plataformas en la nube que simplifican el alojamiento, escalado y mantenimiento automático de aplicaciones",
      "Sistemas que requieren una gestión manual intensiva de servidores",
      "Servicios exclusivos para aplicaciones móviles sin soporte de escalabilidad",
      "Infraestructuras de red local sin acceso a Internet",
    ],
    correctAnswer:
      "Plataformas en la nube que simplifican el alojamiento, escalado y mantenimiento automático de aplicaciones",
  },
  {
    question:
      "¿Cuál de las siguientes opciones es un ejemplo de plataforma PaaS para aplicaciones web?",
    options: [
      "Google App Engine",
      "Amazon EC2",
      "IBM Cloud Virtual Servers",
      "Docker Swarm",
    ],
    correctAnswer: "Google App Engine",
  },
  {
    question:
      "¿Qué ventaja ofrece el uso de servicios de contenedores en un clúster administrado?",
    options: [
      "Facilitan la orquestación, escalado y administración de contenedores sin gestionar la infraestructura subyacente",
      "Obligan al usuario a configurar manualmente cada contenedor",
      "Aumentan la dependencia en hardware físico dedicado",
      "Limitan la portabilidad de las aplicaciones",
    ],
    correctAnswer:
      "Facilitan la orquestación, escalado y administración de contenedores sin gestionar la infraestructura subyacente",
  },
  {
    question:
      "¿Cuál es la función principal de herramientas como Kubernetes?",
    options: [
      "Automatizar la orquestación, escalado y recuperación de contenedores en un clúster",
      "Impedir la integración con otros servicios en la nube",
      "Requerir intervenciones manuales para la actualización de contenedores",
      "Ofrecer únicamente soluciones de almacenamiento en la nube",
    ],
    correctAnswer:
      "Automatizar la orquestación, escalado y recuperación de contenedores en un clúster",
  },
  {
    question:
      "¿Cómo se definen las máquinas virtuales en la nube?",
    options: [
      "Instancias de software que emulan el hardware de un sistema informático para ejecutar sistemas operativos y aplicaciones de manera aislada",
      "Servidores físicos que no permiten la virtualización",
      "Unidades de almacenamiento dedicadas exclusivamente a datos en la nube",
      "Contenedores ligeros sin capacidad de ejecutar sistemas operativos completos",
    ],
    correctAnswer:
      "Instancias de software que emulan el hardware de un sistema informático para ejecutar sistemas operativos y aplicaciones de manera aislada",
  },
  {
    question:
      "¿Cuál es una de las ventajas de utilizar máquinas virtuales en la nube?",
    options: [
      "Permiten ejecutar aplicaciones de forma flexible y escalable sin gestionar hardware físico propio",
      "Exigen inversiones iniciales elevadas en infraestructura",
      "No permiten la escalabilidad dinámica",
      "Requieren administración manual constante del hardware",
    ],
    correctAnswer:
      "Permiten ejecutar aplicaciones de forma flexible y escalable sin gestionar hardware físico propio",
  },
  {
    question:
      "¿Qué diferencia existe entre un hipervisor de tipo 1 y uno de tipo 2?",
    options: [
      "El hipervisor de tipo 1 se ejecuta directamente sobre el hardware físico, mientras que el tipo 2 se ejecuta sobre un sistema operativo existente",
      "Ambos se ejecutan sobre sistemas operativos, sin diferencias significativas",
      "El hipervisor de tipo 2 ofrece mayor rendimiento que el tipo 1",
      "El tipo 1 es utilizado para virtualización ligera y el tipo 2 para contenedores",
    ],
    correctAnswer:
      "El hipervisor de tipo 1 se ejecuta directamente sobre el hardware físico, mientras que el tipo 2 se ejecuta sobre un sistema operativo existente",
  },
  {
    question:
      "¿Qué ejemplo se ofrece para ilustrar el uso de máquinas virtuales en la nube?",
    options: [
      "Una empresa de comercio electrónico utilizando AWS EC2 para alojar su plataforma",
      "El uso de Google App Engine para desplegar código sin servidores",
      "Implementar funciones sin servidor con AWS Lambda",
      "Utilizar Google Drive para colaboración en documentos",
    ],
    correctAnswer:
      "Una empresa de comercio electrónico utilizando AWS EC2 para alojar su plataforma",
  },
  {
    question:
      "¿Qué estrategias hay para la optimización de costos en máquinas virtuales?",
    options: [
      "Dimensionamiento adecuado, escalado automático, uso de instancias reservadas y monitorización",
      "Incrementar siempre la capacidad de las máquinas sin análisis de demanda",
      "Utilizar únicamente máquinas virtuales dedicadas sin escalado",
      "Eliminar la monitorización y análisis de costos",
    ],
    correctAnswer:
      "Dimensionamiento adecuado, escalado automático, uso de instancias reservadas y monitorización",
  },
  {
    question:
      "¿Cuál es el propósito de utilizar almacenamiento de bajo costo en la optimización de costos?",
    options: [
      "Reducir gastos asociados al almacenamiento de datos de acceso esporádico",
      "Aumentar el rendimiento de las operaciones en tiempo real",
      "Garantizar la alta disponibilidad a toda costa",
      "Requerir intervenciones manuales para la eliminación de datos",
    ],
    correctAnswer:
      "Reducir gastos asociados al almacenamiento de datos de acceso esporádico",
  },
  {
    question:
      "¿Qué ventajas ofrecen los contenedores en términos de portabilidad?",
    options: [
      "Permiten ejecutar aplicaciones en distintos entornos sin modificaciones, al empaquetar código y dependencias en una unidad estándar",
      "Requieren configuración específica en cada entorno y limitan la movilidad de las aplicaciones",
      "Aumentan la complejidad de migrar entre proveedores de nube",
      "Imponen restricciones de hardware en cada entorno",
    ],
    correctAnswer:
      "Permiten ejecutar aplicaciones en distintos entornos sin modificaciones, al empaquetar código y dependencias en una unidad estándar",
  },
  {
    question:
      "¿Qué diferencia principal se destaca entre máquinas virtuales y contenedores?",
    options: [
      "Los contenedores son más ligeros y comparten el mismo núcleo del sistema operativo, mientras que las máquinas virtuales incluyen un sistema operativo completo",
      "Las máquinas virtuales son más ligeras que los contenedores",
      "Ambos tienen el mismo consumo de recursos y características",
      "Los contenedores requieren hardware físico dedicado, a diferencia de las máquinas virtuales",
    ],
    correctAnswer:
      "Los contenedores son más ligeros y comparten el mismo núcleo del sistema operativo, mientras que las máquinas virtuales incluyen un sistema operativo completo",
  },
  {
    question:
      "¿Cuál es el propósito de la orquestación de contenedores?",
    options: [
      "Automatizar la implementación, escalado, administración y networking de contenedores en un entorno de producción",
      "Impedir la escalabilidad automática de contenedores",
      "Requerir intervención manual para cada actualización de contenedor",
      "Aumentar la dependencia en la infraestructura física",
    ],
    correctAnswer:
      "Automatizar la implementación, escalado, administración y networking de contenedores en un entorno de producción",
  },
  {
    question:
      "¿Qué herramienta de orquestación es mencionada como la más utilizada en la actualidad?",
    options: ["Kubernetes", "Docker Swarm", "Apache Mesos", "Podman"],
    correctAnswer: "Kubernetes",
  },
  {
    question:
      "¿Cuál es una de las principales ventajas de la computación sin servidor en cuanto a la gestión de la infraestructura?",
    options: [
      "El proveedor se encarga de la administración, permitiendo a los desarrolladores enfocarse en la lógica de negocio",
      "Requiere la administración constante de servidores por parte del usuario",
      "No permite la automatización en el escalado de recursos",
      "Incrementa la complejidad en la implementación de aplicaciones",
    ],
    correctAnswer:
      "El proveedor se encarga de la administración, permitiendo a los desarrolladores enfocarse en la lógica de negocio",
  },
  {
    question:
      "¿Qué ejemplos de servicios sin servidor?",
    options: [
      "AWS Lambda, Google Cloud Functions, Azure Functions e IBM Cloud Functions",
      "Amazon EC2 y Azure Virtual Machines",
      "Google App Engine y AWS Elastic Beanstalk",
      "Docker Swarm y Kubernetes",
    ],
    correctAnswer:
      "AWS Lambda, Google Cloud Functions, Azure Functions e IBM Cloud Functions",
  },
  {
    question:
      "¿Cuál es uno de los desafíos asociados con la computación sin servidor?",
    options: [
      "Latencia en la ejecución de funciones y complejidad en la depuración",
      "Exceso de control manual sobre la infraestructura",
      "Dependencia en hardware local sin escalabilidad",
      "Necesidad de inversión en servidores físicos",
    ],
    correctAnswer:
      "Latencia en la ejecución de funciones y complejidad en la depuración",
  },
  {
    question:
      "¿Cómo se describe el modelo 'Infraestructura como Servicio (IaaS)'?",
    options: [
      "Proporciona recursos de infraestructura virtualizados como servidores, almacenamiento y redes, ofreciendo mayor control sin gestionar hardware físico",
      "Se centra únicamente en el desarrollo de aplicaciones sin infraestructura",
      "Ofrece aplicaciones completamente gestionadas sin necesidad de administración de recursos",
      "Requiere la administración completa del hardware físico por parte del usuario",
    ],
    correctAnswer:
      "Proporciona recursos de infraestructura virtualizados como servidores, almacenamiento y redes, ofreciendo mayor control sin gestionar hardware físico",
  },
  {
    question:
      "¿Qué casos de uso se asocian a la computación sin servidor?",
    options: [
      "Procesamiento de imágenes, análisis de datos en tiempo real y automatización de tareas empresariales",
      "Gestión exclusiva de máquinas virtuales dedicadas",
      "Implementación de hardware en centros de datos locales",
      "Desarrollo de aplicaciones sin integración con otros servicios",
    ],
    correctAnswer:
      "Procesamiento de imágenes, análisis de datos en tiempo real y automatización de tareas empresariales",
  },
  {
    question:
      "En cuanto a la seguridad, ¿qué medida se destaca para los servicios en la nube?",
    options: [
      "Implementación de cifrado de datos y control de acceso basado en roles",
      "Depender exclusivamente de la seguridad física de los servidores",
      "Evitar la actualización de parches de seguridad",
      "Exclusión de medidas de autenticación en la nube",
    ],
    correctAnswer:
      "Implementación de cifrado de datos y control de acceso basado en roles",
  },
  {
    question:
      "¿Qué rol juega la automatización en los servicios de cómputo en la nube?",
    options: [
      "Permite el aprovisionamiento, configuración y administración de recursos sin intervención manual, mejorando la eficiencia",
      "Requiere que todos los procesos sean gestionados manualmente por el usuario",
      "Aumenta la complejidad operativa y la dependencia de recursos humanos",
      "Impide el escalado automático de los recursos",
    ],
    correctAnswer:
      "Permite el aprovisionamiento, configuración y administración de recursos sin intervención manual, mejorando la eficiencia",
  },
  {
    question:
      "¿Cómo se relaciona la escalabilidad con la disponibilidad de servicios en la nube?",
    options: [
      "La escalabilidad automática permite ajustar la capacidad según la demanda, garantizando alta disponibilidad y tolerancia a fallos",
      "La escalabilidad manual limita la disponibilidad a picos específicos",
      "La escalabilidad y la disponibilidad son conceptos no relacionados en la nube",
      "La escalabilidad siempre reduce la disponibilidad de los servicios",
    ],
    correctAnswer:
      "La escalabilidad automática permite ajustar la capacidad según la demanda, garantizando alta disponibilidad y tolerancia a fallos",
  },
  {
    question:
      "¿Qué ejemplos se utilizan para ilustrar el uso de plataformas PaaS en el desarrollo de aplicaciones web?",
    options: [
      "Google App Engine, Azure App Service y AWS Elastic Beanstalk",
      "Amazon EC2 y Azure Virtual Machines",
      "AWS Lambda y Google Cloud Functions",
      "Docker Swarm y Kubernetes",
    ],
    correctAnswer:
      "Google App Engine, Azure App Service y AWS Elastic Beanstalk",
  },
  {
    question:
      "¿Qué función desempeñan los servicios administrados de cómputo?",
    options: [
      "Gestionar, mantener y optimizar la infraestructura de cómputo, permitiendo a las organizaciones centrarse en el desarrollo de aplicaciones",
      "Obligar a las empresas a gestionar manualmente todos los aspectos de su infraestructura",
      "Limitar el acceso a recursos y aplicaciones en la nube",
      "Excluir la integración de servicios de seguridad en la infraestructura",
    ],
    correctAnswer:
      "Gestionar, mantener y optimizar la infraestructura de cómputo, permitiendo a las organizaciones centrarse en el desarrollo de aplicaciones",
  },
  {
    question:
      "¿Qué elemento es fundamental para la optimización de costes en máquinas virtuales?",
    options: [
      "La monitorización y ajuste continuo de recursos en función del consumo real",
      "El incremento constante de la capacidad sin análisis de demanda",
      "La eliminación de estrategias de escalado automático",
      "La adquisición de hardware físico dedicado sin redundancia",
    ],
    correctAnswer:
      "La monitorización y ajuste continuo de recursos en función del consumo real",
  },
  {
    question:
      "¿Cuál de las siguientes afirmaciones sobre contenedores y microservicios es correcta?",
    options: [
      "Los contenedores facilitan la implementación de microservicios al permitir que cada servicio se ejecute de manera independiente en su propio entorno aislado",
      "Los microservicios requieren que todas las aplicaciones se ejecuten en un único contenedor",
      "Los contenedores y los microservicios no son compatibles entre sí",
      "La implementación de microservicios siempre demanda el uso exclusivo de máquinas virtuales",
    ],
    correctAnswer:
      "Los contenedores facilitan la implementación de microservicios al permitir que cada servicio se ejecute de manera independiente en su propio entorno aislado",
  },
  {
    question:
      "¿Qué se destaca sobre la integración de inteligencia artificial y automatización en la nube?",
    options: [
      "La integración de IA mejora la eficiencia operativa al automatizar procesos y análisis en tiempo real",
      "La inteligencia artificial no se utiliza en la computación en la nube",
      "La automatización y la IA siempre incrementan significativamente los costos operativos",
      "La IA y la automatización son conceptos independientes sin relación en la nube",
    ],
    correctAnswer:
      "La integración de IA mejora la eficiencia operativa al automatizar procesos y análisis en tiempo real",
  },
  {
    question:
      "¿Qué aspecto se resalta sobre la computación en el borde (Edge Computing) como tendencia?",
    options: [
      "Procesamiento de datos cerca del origen para reducir la latencia",
      "Centralización de todos los procesos en un único centro de datos",
      "Incremento de la dependencia de la nube centralizada sin reducción de latencia",
      "Eliminación de la redundancia de datos en la nube",
    ],
    correctAnswer:
      "Procesamiento de datos cerca del origen para reducir la latencia",
  },
  {
    question:
      "¿Qué importancia tiene la interoperabilidad y portabilidad en la computación en la nube?",
    options: [
      "Facilita la migración de servicios entre distintos proveedores sin grandes complicaciones",
      "Impide la integración de servicios de diferentes proveedores",
      "Requiere la reconfiguración completa de aplicaciones al cambiar de proveedor",
      "Es irrelevante en entornos de nube híbrida",
    ],
    correctAnswer:
      "Facilita la migración de servicios entre distintos proveedores sin grandes complicaciones",
  },
  {
    question:
      "¿Qué ejemplo hay para ilustrar la portabilidad de contenedores?",
    options: [
      "El traslado de contenedores Docker de Google Cloud a AWS sin modificar el código fuente",
      "La migración de datos desde servidores físicos a una nube privada",
      "La implementación de máquinas virtuales en distintos centros de datos",
      "El uso exclusivo de plataformas de hardware dedicadas",
    ],
    correctAnswer:
      "El traslado de contenedores Docker de Google Cloud a AWS sin modificar el código fuente",
  },
  {
    question:
      "¿Qué ventaja se atribuye a la automatización de la administración de servicios en la nube?",
    options: [
      "Reduce la carga operativa y permite una rápida implementación y escalado de aplicaciones",
      "Aumenta la necesidad de intervención manual y reduce la eficiencia",
      "Limita la capacidad de respuesta ante picos de demanda",
      "Complica el proceso de despliegue y mantenimiento de aplicaciones",
    ],
    correctAnswer:
      "Reduce la carga operativa y permite una rápida implementación y escalado de aplicaciones",
  },
  {
    question:
      "¿Qué desafío hay en la adopción de servicios administrados de cómputo?",
    options: [
      "La dependencia del proveedor de servicios y la posible incompatibilidad con sistemas heredados",
      "La imposibilidad de escalar aplicaciones en la nube",
      "El incremento ineludible de costos sin posibilidad de optimización",
      "La necesidad de una infraestructura física extensa en cada ubicación",
    ],
    correctAnswer:
      "La dependencia del proveedor de servicios y la posible incompatibilidad con sistemas heredados",
  },
]