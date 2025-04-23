import { Question } from '../types'

export const seguridad_old: Question[] = [
    {
      question:
        '¿Cuáles son los tres principios fundamentales del Triángulo de la Seguridad?',
      options: [
        'Autenticación, Integridad, Disponibilidad',
        'Confidencialidad, Autenticación, Redundancia',
        'Confidencialidad, Integridad, Disponibilidad',
        'Cifrado, Autorización, Redundancia',
      ],
      correctAnswer: 'Confidencialidad, Integridad, Disponibilidad',
    },
    {
      question:
        '¿Qué elemento NO es responsabilidad del cliente en el modelo de responsabilidad compartida de AWS?',
      options: [
        'Configuración del firewall',
        'Cifrado de datos en tránsito',
        'Mantenimiento de la infraestructura física',
        'Gestión de usuarios y contraseñas',
      ],
      correctAnswer: 'Mantenimiento de la infraestructura física',
    },
    {
      question:
        'En un CPD, ¿qué sistema se utiliza para extinguir incendios sin dañar equipos electrónicos?',
      options: [
        'Agua nebulizada',
        'Gases inertes (argón o nitrógeno)',
        'Espuma química',
        'Extintores de CO₂',
      ],
      correctAnswer: 'Gases inertes (argón o nitrógeno)',
    },
    {
      question:
        '¿Qué tipo de criptografía utiliza una única clave para cifrar y descifrar?',
      options: ['Asimétrica', 'Híbrida', 'Simétrica', 'Hash'],
      correctAnswer: 'Simétrica',
    },
    {
      question: '¿Cuál es la temperatura ideal en un CPD?',
      options: [
        '10°C - 15°C',
        '18°C - 27°C',
        '30°C - 35°C',
        '5°C - 10°C',
      ],
      correctAnswer: '18°C - 27°C',
    },
    {
      question:
        '¿Qué protocolo se utiliza en la federación de identidades para acceso único (SSO)?',
      options: ['HTTP', 'SAML', 'FTP', 'TCP/IP'],
      correctAnswer: 'SAML',
    },
    {
      question:
        '¿Qué servicio de AWS gestiona permisos de usuarios y roles?',
      options: ['Amazon S3', 'AWS IAM', 'Amazon EC2', 'AWS Lambda'],
      correctAnswer: 'AWS IAM',
    },
    {
      question:
        '¿Qué principio de seguridad asegura que los datos no sean modificados ilegítimamente?',
      options: [
        'Confidencialidad',
        'Integridad',
        'Disponibilidad',
        'Autenticación',
      ],
      correctAnswer: 'Integridad',
    },
    {
      question: 'En IaaS, ¿qué es responsabilidad del cliente?',
      options: [
        'Mantenimiento del hipervisor',
        'Actualización del sistema operativo',
        'Protección física del data center',
        'Gestión de la infraestructura de red del proveedor',
      ],
      correctAnswer: 'Actualización del sistema operativo',
    },
    {
      question: '¿Qué factor NO influye en la ubicación de un CPD?',
      options: [
        'Proximidad a redes de comunicación',
        'Color de las paredes del edificio',
        'Riesgos naturales',
        'Acceso a energía estable',
      ],
      correctAnswer: 'Color de las paredes del edificio',
    },
    {
      question:
        '¿Qué herramienta se usa para detectar incendios en etapas tempranas en un CPD?',
      options: [
        'Sensores de movimiento',
        'Sistemas VESDA',
        'Cámaras térmicas',
        'Alarmas sonoras',
      ],
      correctAnswer: 'Sistemas VESDA',
    },
    {
      question:
        '¿Qué tipo de cifrado es más eficiente para grandes volúmenes de datos?',
      options: ['Asimétrico', 'Simétrico', 'Híbrido', 'Hash'],
      correctAnswer: 'Simétrico',
    },
    {
      question: '¿Qué nivel de humedad relativa es ideal en un CPD?',
      options: ['20% - 30%', '40% - 60%', '70% - 80%', '10% - 20%'],
      correctAnswer: '40% - 60%',
    },
    {
      question:
        '¿Qué componente de IAM define permisos para usuarios o grupos?',
      options: ['Roles', 'Políticas', 'Recursos', 'Grupos'],
      correctAnswer: 'Políticas',
    },
    {
      question:
        '¿Qué capa de seguridad física en un CPD incluye reconocimiento facial?',
      options: [
        'Control de acceso con tarjetas RFID',
        'Acceso biométrico',
        'Contraseñas PIN',
        'Videovigilancia',
      ],
      correctAnswer: 'Acceso biométrico',
    },
    {
      question: 'En PaaS, ¿qué responsabilidad tiene el cliente?',
      options: [
        'Mantenimiento del sistema operativo',
        'Cifrado de datos en reposo',
        'Protección física del servidor',
        'Gestión del hipervisor',
      ],
      correctAnswer: 'Cifrado de datos en reposo',
    },
    {
      question:
        '¿Qué principio de seguridad garantiza que los datos estén accesibles para usuarios autorizados?',
      options: [
        'Confidencialidad',
        'Integridad',
        'Disponibilidad',
        'Autenticación',
      ],
      correctAnswer: 'Disponibilidad',
    },
    {
      question:
        '¿Qué certificación evalúa la fiabilidad de un data center?',
      options: ['ISO 9001', 'TIER', 'PCI DSS', 'GDPR'],
      correctAnswer: 'TIER',
    },
    {
      question:
        '¿Qué sistema en un CPD evita sobrecalentamiento de equipos?',
      options: [
        'Sistemas de climatización',
        'Blindaje de paredes',
        'Suelos elevados',
        'Control de acceso biométrico',
      ],
      correctAnswer: 'Sistemas de climatización',
    },
    {
      question: '¿Qué tipo de criptografía usa claves pública y privada?',
      options: ['Simétrica', 'Asimétrica', 'Híbrida', 'Hash'],
      correctAnswer: 'Asimétrica',
    },
    {
      question:
        '¿Qué elemento NO es parte de la seguridad lógica en la nube?',
      options: [
        'Cifrado de datos',
        'Ubicación geográfica del CPD',
        'Gestión de IAM',
        'Autenticación multifactor',
      ],
      correctAnswer: 'Ubicación geográfica del CPD',
    },
    {
      question:
        '¿Qué protocolo protege datos en tránsito en una página web?',
      options: ['HTTP', 'HTTPS', 'FTP', 'SMTP'],
      correctAnswer: 'HTTPS',
    },
    {
      question:
        '¿Qué servicio de AWS ofrece cifrado automático de datos en reposo?',
      options: [
        'AWS Lambda',
        'Amazon S3',
        'Amazon EC2',
        'AWS CloudTrail',
      ],
      correctAnswer: 'Amazon S3',
    },
    {
      question: '¿Qué característica define un CPD modular?',
      options: [
        'Escalabilidad',
        'Blindaje contra terremotos',
        'Uso exclusivo de energía renovable',
        'Altura del techo fija',
      ],
      correctAnswer: 'Escalabilidad',
    },
    {
      question: '¿Qué sistema eléctrico evita cortes en un CPD?',
      options: [
        'SAI (Sistemas de Alimentación Ininterrumpida)',
        'Generadores eólicos',
        'Paneles solares',
        'Redundancia de cableado',
      ],
      correctAnswer: 'SAI (Sistemas de Alimentación Ininterrumpida)',
    },
    {
      question:
        '¿Qué tipo de ataque busca sobrecargar un sistema para negar servicio?',
      options: ['Phishing', 'DDoS', 'Malware', 'Inyección SQL'],
      correctAnswer: 'DDoS',
    },
    {
      question:
        '¿Qué herramienta registra actividades en AWS para auditoría?',
      options: ['AWS CloudTrail', 'Amazon S3', 'AWS IAM', 'Amazon VPC'],
      correctAnswer: 'AWS CloudTrail',
    },
    {
      question: '¿Qué no es una función principal de un CPD?',
      options: [
        'Almacenamiento de datos',
        'Procesamiento en tiempo real',
        'Fabricación de hardware',
        'Redundancia y recuperación',
      ],
      correctAnswer: 'Fabricación de hardware',
    },
    {
      question:
        '¿Qué elemento protege contra electricidad estática en un CPD?',
      options: [
        'Control de humedad',
        'Refrigeración líquida',
        'Suelos elevados',
        'Blindaje acústico',
      ],
      correctAnswer: 'Control de humedad',
    },
    {
      question:
        '¿Qué nivel de ruido promedio requiere protección auditiva en un CPD?',
      options: ['60 dB', '80 dB', '100 dB', '120 dB'],
      correctAnswer: '80 dB',
    },
    {
      question: '¿Qué característica define IAM?',
      options: [
        'Gestión centralizada de permisos',
        'Cifrado de datos en tránsito',
        'Protección física de servidores',
        'Monitorización de temperatura',
      ],
      correctAnswer: 'Gestión centralizada de permisos',
    },
    {
      question: '¿Qué no es un componente de IAM?',
      options: [
        'Usuarios',
        'Sistemas de refrigeración',
        'Roles',
        'Políticas',
      ],
      correctAnswer: 'Sistemas de refrigeración',
    },
    {
      question:
        '¿Qué clave se comparte libremente en criptografía asimétrica?',
      options: [
        'Clave pública',
        'Clave privada',
        'Clave de sesión',
        'Clave simétrica',
      ],
      correctAnswer: 'Clave pública',
    },
    {
      question: '¿Qué tipo de política en IAM se adjunta a un recurso?',
      options: [
        'Basada en identidad',
        'Basada en recursos',
        'Basada en roles',
        'Basada en grupos',
      ],
      correctAnswer: 'Basada en recursos',
    },
    {
      question:
        '¿Qué no es una buena práctica para seguridad en cuentas?',
      options: [
        'Rotación de contraseñas',
        'Compartir credenciales entre equipos',
        'MFA',
        'Permisos mínimos necesarios',
      ],
      correctAnswer: 'Compartir credenciales entre equipos',
    },
    {
      question: '¿Qué protocolo se usa en HTTPS para cifrado?',
      options: ['TLS', 'SSH', 'IPsec', 'OAuth'],
      correctAnswer: 'TLS',
    },
    {
      question: '¿Qué no es responsabilidad del proveedor en la nube?',
      options: [
        'Seguridad física del data center',
        'Cifrado de datos del cliente',
        'Mantenimiento del hipervisor',
        'Protección contra DDoS',
      ],
      correctAnswer: 'Cifrado de datos del cliente',
    },
    {
      question: '¿Qué algoritmo es simétrico?',
      options: ['RSA', 'AES', 'SHA-256', 'ECC'],
      correctAnswer: 'AES',
    },
    {
      question:
        '¿Qué sistema reduce oxígeno para extinguir incendios en un CPD?',
      options: [
        'Reducción de oxígeno',
        'Agua nebulizada',
        'Espuma química',
        'Gases inertes',
      ],
      correctAnswer: 'Reducción de oxígeno',
    },
    {
      question: '¿Qué no es un principio de seguridad informática?',
      options: [
        'Confidencialidad',
        'Integridad',
        'Redundancia',
        'Disponibilidad',
      ],
      correctAnswer: 'Redundancia',
    },
    {
      question:
        '¿En qué servicio el cliente solo gestiona usuarios y contraseñas?',
      options: ['IaaS', 'PaaS', 'SaaS', 'CPD'],
      correctAnswer: 'SaaS',
    },
    {
      question: '¿Qué ventaja tiene la criptografía híbrida?',
      options: [
        'Combina rapidez y seguridad en intercambio de claves',
        'Usa solo claves públicas',
        'No requiere autenticación',
        'Es más lenta que la simétrica',
      ],
      correctAnswer:
        'Combina rapidez y seguridad en intercambio de claves',
    },
    {
      question:
        '¿Qué no es un factor para ubicar un CPD dentro de un edificio?',
      options: [
        'Alejamiento de zonas de riesgo',
        'Color de la pintura',
        'Acceso a ascensores de carga',
        'Capacidad de carga estructural',
      ],
      correctAnswer: 'Color de la pintura',
    },
    {
      question:
        '¿Qué herramienta en AWS permite crear redes privadas virtuales?',
      options: ['Amazon VPC', 'AWS IAM', 'Amazon S3', 'AWS Lambda'],
      correctAnswer: 'Amazon VPC',
    },
    {
      question: '¿Qué no es parte de la seguridad en comunicaciones?',
      options: [
        'Uso de TLS',
        'Copia de seguridad de datos',
        'APIs seguras',
        'Monitoreo de actividades',
      ],
      correctAnswer: 'Copia de seguridad de datos',
    },
    {
      question:
        '¿Qué elemento protege contra accesos no autorizados en racks?',
      options: [
        'Cerraduras en racks',
        'Sistemas VESDA',
        'Refrigeración líquida',
        'Suelos elevados',
      ],
      correctAnswer: 'Cerraduras en racks',
    },
    {
      question: '¿Qué no es un tipo de criptografía moderna?',
      options: ['Simétrica', 'Asimétrica', 'Cuántica', 'Híbrida'],
      correctAnswer: 'Cuántica',
    },
    {
      question: '¿Qué característica tiene un CPD Tier IV?',
      options: [
        'Tolerancia a fallos',
        'Ausencia de redundancia',
        'Uso exclusivo de energía solar',
        'Sin sistemas de refrigeración',
      ],
      correctAnswer: 'Tolerancia a fallos',
    },
    {
      question: '¿Qué no es un método de control de acceso en un CPD?',
      options: [
        'Huella dactilar',
        'Tarjeta RFID',
        'Reconocimiento de voz con ruido ambiental',
        'Patrón de escritura',
      ],
      correctAnswer: 'Reconocimiento de voz con ruido ambiental',
    },
    {
      question: '¿Qué función cumple IAM en AWS?',
      options: [
        'Gestionar identidades y permisos',
        'Almacenar datos cifrados',
        'Monitorizar temperatura del CPD',
        'Proteger contra incendios',
      ],
      correctAnswer: 'Gestionar identidades y permisos',
    },
    {
      question: "¿Qué principio de seguridad informática se relaciona directamente con la prevención de la divulgación no autorizada de información?",
      options: ["Integridad", "Disponibilidad", "Confidencialidad", "Autenticación"],
      correctAnswer: "Confidencialidad"
    },
    {
      question: "En el modelo de responsabilidad compartida de AWS, ¿qué elemento es exclusivamente responsabilidad del proveedor?",
      options: ["Cifrado de datos en tránsito", "Gestión del hipervisor", "Configuración de grupos de seguridad", "Rotación de claves de cifrado"],
      correctAnswer: "Gestión del hipervisor"
    },
    {
      question: "¿Qué sistema de extinción de incendios en un CPD utiliza partículas de agua menores a 1000 micras?",
      options: ["Gases inertes", "Agua nebulizada", "Espuma conductiva", "CO₂ líquido"],
      correctAnswer: "Agua nebulizada"
    },
    {
      question: "En criptografía híbrida, ¿qué combinación se utiliza para optimizar seguridad y eficiencia?",
      options: ["Clave pública + Hash", "Clave simétrica para datos + Asimétrica para intercambio", "Doble clave privada", "Cifrado rotativo"],
      correctAnswer: "Clave simétrica para datos + Asimétrica para intercambio"
    },
    {
      question: "¿Qué nivel TIER de un CPD garantiza tolerancia a fallos con redundancia completa?",
      options: ["TIER I", "TIER II", "TIER III", "TIER IV"],
      correctAnswer: "TIER IV"
    },
    {
      question: "¿Qué componente de IAM permite acceso temporal a recursos específicos?",
      options: ["Políticas", "Grupos", "Roles", "Usuarios"],
      correctAnswer: "Roles"
    },
    {
      question: "En un ataque DDoS, ¿qué capa del modelo de responsabilidad compartida protege el proveedor?",
      options: ["Aplicación", "Infraestructura de red", "Sistema operativo", "Gestión de usuarios"],
      correctAnswer: "Infraestructura de red"
    },
    {
      question: "¿Qué protocolo se utiliza para implementar federación de identidades en servicios cloud?",
      options: ["HTTPS", "SSH", "SAML", "TCP/IP"],
      correctAnswer: "SAML"
    },
    {
      question: "¿Qué característica de un CPD modular permite adaptarse al crecimiento de la demanda?",
      options: ["Blindaje sísmico", "Escalabilidad horizontal", "Refrigeración pasiva", "Cableado redundante"],
      correctAnswer: "Escalabilidad horizontal"
    },
    {
      question: "En PaaS, ¿qué responsabilidad recae íntegramente en el cliente?",
      options: ["Mantenimiento de la infraestructura física", "Seguridad del código de aplicación", "Gestión de zonas de disponibilidad", "Actualización del hipervisor"],
      correctAnswer: "Seguridad del código de aplicación"
    },
    {
      question: "¿Qué mecanismo garantiza la integridad de los datos en tránsito?",
      options: ["Cifrado AES-256", "Sumas de comprobación (checksums)", "Balancers de carga", "Redes privadas virtuales"],
      correctAnswer: "Sumas de comprobación (checksums)"
    },
    {
      question: "¿Qué sistema en un CPD monitorea partículas en el aire para detectar incendios incipientes?",
      options: ["VESDA", "Termografía infrarroja", "Sensores de humedad", "Cámaras térmicas"],
      correctAnswer: "VESDA"
    },
    {
      question: "En IaaS, ¿qué herramienta de AWS permite crear redes virtuales aisladas?",
      options: ["Amazon VPC", "AWS Direct Connect", "CloudFront", "S3 Buckets"],
      correctAnswer: "Amazon VPC"
    },
    {
      question: "¿Qué principio de seguridad se ve comprometido si un servidor cloud sufre un downtime prolongado?",
      options: ["Confidencialidad", "Integridad", "Disponibilidad", "No repudio"],
      correctAnswer: "Disponibilidad"
    },
    {
      question: "¿Qué tipo de control de acceso biométrico utiliza patrones de comportamiento único?",
      options: ["Reconocimiento de iris", "Huella dactilar", "Dinámica de tecleo", "Reconocimiento facial 3D"],
      correctAnswer: "Dinámica de tecleo"
    },
    {
      question: "En el modelo de responsabilidad compartida para SaaS, ¿qué gestiona principalmente el cliente?",
      options: ["Parches de seguridad del SO", "Configuración de firewalls", "Gestión de usuarios y MFA", "Actualización de la plataforma"],
      correctAnswer: "Gestión de usuarios y MFA"
    },
    {
      question: "¿Qué elemento de un CPD mitiga riesgos de electricidad estática?",
      options: ["Control de humedad relativa", "Suelos elevados", "Refrigeración líquida", "Cableado blindado"],
      correctAnswer: "Control de humedad relativa"
    },
    {
      question: "¿Qué característica define una política IAM basada en recursos?",
      options: ["Se aplica a usuarios globales", "Restringe acceso por ubicación geográfica", "Se adjunta directamente a un servicio específico", "Requiere autenticación biométrica"],
      correctAnswer: "Se adjunta directamente a un servicio específico"
    },
    {
      question: "En criptografía asimétrica, ¿qué algoritmo es ampliamente usado para firmas digitales?",
      options: ["AES", "RSA", "SHA-256", "Blowfish"],
      correctAnswer: "RSA"
    },
    {
      question: "¿Qué factor es determinante para ubicar un CPD en zonas frías?",
      options: ["Reducción de costos de refrigeración", "Acceso a mano de obra especializada", "Proximidad a usuarios finales", "Mayor seguridad física"],
      correctAnswer: "Reducción de costos de refrigeración"
    },
    {
      question: "¿Qué componente de un CPD garantiza continuidad operativa ante fallos eléctricos?",
      options: ["SAI (UPS)", "Firewalls de aplicación", "Racks cerrados", "Sensores VESDA"],
      correctAnswer: "SAI (UPS)"
    },
    {
      question: "En seguridad lógica, ¿qué técnica protege datos almacenados en reposo?",
      options: ["Cifrado TLS", "Enmascaramiento de datos", "Cifrado AES-256", "Balanceo de carga"],
      correctAnswer: "Cifrado AES-256"
    },
    {
      question: "¿Qué nivel de ruido en un CPD exige uso obligatorio de protección auditiva?",
      options: ["70 dB", "80 dB", "90 dB", "100 dB"],
      correctAnswer: "80 dB"
    },
    {
      question: "¿Qué mecanismo en IAM previene el acceso no autorizado mediante permisos granulares?",
      options: ["Políticas de mínimo privilegio", "Cifrado homomórfico", "Redundancia N+1", "Sincronización LDAP"],
      correctAnswer: "Políticas de mínimo privilegio"
    },
    {
      question: "¿Qué sistema en un CPD protege contra fluctuaciones de energía?",
      options: ["Generadores diésel", "Estabilizadores de voltaje", "SAI y redundancia N+1", "Celdas de combustible"],
      correctAnswer: "SAI y redundancia N+1"
    },
    {
      question: "En el modelo OSI, ¿qué capa protege HTTPS mediante cifrado?",
      options: ["Capa de transporte", "Capa de aplicación", "Capa de red", "Capa de sesión"],
      correctAnswer: "Capa de transporte"
    },
    {
      question: "¿Qué tipo de ataque explota vulnerabilidades en aplicaciones web para ejecutar comandos no autorizados?",
      options: ["DDoS", "Phishing", "Inyección SQL", "Man-in-the-middle"],
      correctAnswer: "Inyección SQL"
    },
    {
      question: "¿Qué herramienta de AWS registra actividad de API para auditoría de seguridad?",
      options: ["CloudTrail", "CloudWatch", "Config", "Inspector"],
      correctAnswer: "CloudTrail"
    },
    {
      question: "¿Qué principio del Triángulo de Seguridad se asegura mediante backups y redundancia?",
      options: ["Confidencialidad", "Integridad", "Disponibilidad", "Autenticación"],
      correctAnswer: "Disponibilidad"
    },
    {
      question: "En un CPD, ¿qué sistema reduce el oxígeno para extinguir incendios sin dañar equipos?",
      options: ["Agua nebulizada", "Gases inertes", "Supresión por reducción de oxígeno", "Espuma química"],
      correctAnswer: "Supresión por reducción de oxígeno"
    },
    {
      question: "¿Qué estándar de cifrado es recomendado por NIST para datos confidenciales?",
      options: ["DES", "AES-256", "RC4", "Blowfish"],
      correctAnswer: "AES-256"
    },
    {
      question: "En IaaS, ¿qué responsabilidad incluye la configuración de NACLs?",
      options: ["Cliente: seguridad de red", "Proveedor: mantenimiento de hardware", "Cliente: gestión de hipervisor", "Proveedor: autenticación de usuarios"],
      correctAnswer: "Cliente: seguridad de red"
    },
    {
      question: "¿Qué tecnología permite el aislamiento de instancias virtuales en la nube?",
      options: ["Hipervisor", "Contenedores Docker", "Balanceadores de carga", "API Gateway"],
      correctAnswer: "Hipervisor"
    },
    {
      question: "¿Qué característica define un CPD Tier III?",
      options: ["Redundancia concurrente mantenible", "Sin redundancia", "Tolerancia a fallos total", "Enfriamiento natural"],
      correctAnswer: "Redundancia concurrente mantenible"
    },
    {
      question: "¿Qué elemento NO es parte de la seguridad física de un CPD?",
      options: ["Control biométrico", "Videovigilancia 24/7", "Políticas IAM", "Puertas blindadas"],
      correctAnswer: "Políticas IAM"
    },
    {
      question: "En criptografía, ¿qué función asegura la integridad de un mensaje mediante un resumen único?",
      options: ["Cifrado simétrico", "Hash criptográfico", "Firma digital", "Certificado SSL"],
      correctAnswer: "Hash criptográfico"
    },
    {
      question: "¿Qué protocolo garantiza confidencialidad en comunicaciones VPN?",
      options: ["HTTP", "IPsec", "FTP", "SNMP"],
      correctAnswer: "IPsec"
    },
    {
      question: "En AWS Shared Responsibility Model, ¿qué gestiona el cliente en EC2?",
      options: ["Actualizaciones del hipervisor", "Parches del sistema operativo", "Mantenimiento de zonas de disponibilidad", "Protección física del data center"],
      correctAnswer: "Parches del sistema operativo"
    },
    {
      question: "¿Qué técnica de refrigeración en CPDs aprovecha climas fríos externos?",
      options: ["Free cooling", "Refrigeración líquida", "Ventilación forzada", "Intercambiadores de calor"],
      correctAnswer: "Free cooling"
    },
    {
      question: "¿Qué mecanismo en IAM permite acceso temporal a servicios AWS?",
      options: ["Roles STS (Security Token Service)", "Políticas en línea", "Grupos anidados", "Usuarios federados"],
      correctAnswer: "Roles STS (Security Token Service)"
    },
    {
      question: "¿Qué tipo de ataque busca explotar vulnerabilidades humanas mediante engaño?",
      options: ["DDoS", "Phishing", "Zero-day exploit", "SQLi"],
      correctAnswer: "Phishing"
    },
    {
      question: "¿Qué sistema en un CPD previene corrosión por humedad excesiva?",
      options: ["Control de humedad relativa", "Sellado hermético", "Ventilación pasiva", "Cableado subflor"],
      correctAnswer: "Control de humedad relativa"
    },
    {
      question: "En seguridad lógica, ¿qué protege contra replay attacks?",
      options: ["Tokens OTP", "Cifrado AES", "Firewalls de aplicación", "Balanceo de carga"],
      correctAnswer: "Tokens OTP"
    },
    {
      question: "¿Qué norma regula la protección de datos personales en la UE?",
      options: ["PCI DSS", "GDPR", "ISO 27001", "HIPAA"],
      correctAnswer: "GDPR"
    },
    {
      question: "¿Qué servicio de AWS centraliza gestión de claves de cifrado?",
      options: ["KMS (Key Management Service)", "Secrets Manager", "Certificate Manager", "CloudHSM"],
      correctAnswer: "KMS (Key Management Service)"
    },
    {
      question: "En un CPD, ¿qué sistema previene accesos no autorizados a racks?",
      options: ["Cerraduras físicas en racks", "Firewalls de red", "Cifrado SSL/TLS", "Monitorización de temperatura"],
      correctAnswer: "Cerraduras físicas en racks"
    },
    {
      question: "¿Qué principio de seguridad implica que los datos no sean alterados ilegítimamente?",
      options: ["Confidencialidad", "Integridad", "Disponibilidad", "Autenticación"],
      correctAnswer: "Integridad"
    },
    {
      question: "¿Qué herramienta en AWS permite definir políticas de acceso granular?",
      options: ["IAM Policies", "S3 Bucket Policies", "Security Groups", "Todas las anteriores"],
      correctAnswer: "Todas las anteriores"
    },
    {
      question: "En criptografía híbrida, ¿qué clave se usa para cifrar los datos?",
      options: ["Clave pública del receptor", "Clave simétrica generada aleatoriamente", "Clave privada del emisor", "Hash SHA-256"],
      correctAnswer: "Clave simétrica generada aleatoriamente"
    },
    {
      question: "¿Qué característica de un CPD garantiza operación durante cortes eléctricos?",
      options: ["Generadores diésel", "SAI (UPS)", "Redundancia N+1", "Todas las anteriores"],
      correctAnswer: "Todas las anteriores"
    },
    {
      question: "¿Qué protocolo es esencial para implementar SSO en entornos cloud?",
      options: ["OAuth 2.0", "SSH", "TCP/IP", "DNS"],
      correctAnswer: "OAuth 2.0"
    },
    {
      question: "En PaaS, ¿qué elemento es responsabilidad del proveedor?",
      options: ["Cifrado de datos en reposo", "Gestión del sistema operativo", "Desarrollo de código seguro", "Configuración de firewalls"],
      correctAnswer: "Gestión del sistema operativo"
    }
  ]