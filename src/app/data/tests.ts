export type Question = {
  question: string
  options: string[]
  correctAnswer: string
}

export const tests: Record<string, Question[]> = {
  seguridad: [
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
  ],
  redes: [
    {
      question:
        '¿Cuál de las siguientes es una característica principal de las redes en la nube?',
      options: [
        'Escalabilidad dinámica',
        'Uso exclusivo de redes cableadas',
        'Limitación geográfica',
        'Dependencia de hardware físico',
      ],
      correctAnswer: 'Escalabilidad dinámica',
    },
    {
      question:
        '¿Qué servicio utiliza Netflix para reducir la latencia en la entrega de contenido?',
      options: ['VPN', 'CDN', 'DNS', 'TCP/IP'],
      correctAnswer: 'CDN',
    },
    {
      question:
        '¿Qué protocolo garantiza la entrega confiable de datos en la capa de transporte?',
      options: ['UDP', 'HTTP', 'TCP', 'ICMP'],
      correctAnswer: 'TCP',
    },
    {
      question:
        '¿Qué dirección identifica un dispositivo a nivel de hardware en una red local?',
      options: [
        'Dirección IP',
        'Dirección MAC',
        'Dirección DNS',
        'Dirección CIDR',
      ],
      correctAnswer: 'Dirección MAC',
    },
    {
      question:
        '¿Qué tipo de red abarca una ciudad o campus universitario?',
      options: ['PAN', 'LAN', 'MAN', 'WAN'],
      correctAnswer: 'MAN',
    },
    {
      question:
        '¿Qué topología de red conecta todos los dispositivos a un punto central?',
      options: ['Bus', 'Estrella', 'Anillo', 'Malla'],
      correctAnswer: 'Estrella',
    },
    {
      question:
        '¿Qué capa del modelo OSI se encarga del cifrado de datos?',
      options: [
        'Capa de aplicación',
        'Capa de presentación',
        'Capa de transporte',
        'Capa de red',
      ],
      correctAnswer: 'Capa de presentación',
    },
    {
      question: '¿Qué versión de IP utiliza direcciones de 128 bits?',
      options: ['IPv4', 'IPv6', 'IPv5', 'CIDR'],
      correctAnswer: 'IPv6',
    },
    {
      question:
        '¿Qué servicio traduce nombres de dominio a direcciones IP?',
      options: ['CDN', 'DNS', 'VPC', 'QoS'],
      correctAnswer: 'DNS',
    },
    {
      question:
        '¿Qué herramienta filtra el tráfico entrante y saliente en una red?',
      options: ['Switch', 'Router', 'Firewall', 'Access Point'],
      correctAnswer: 'Firewall',
    },
    {
      question:
        '¿Qué tipo de tráfico se envía a un grupo específico de dispositivos?',
      options: ['Unicast', 'Broadcast', 'Multicast', 'Anycast'],
      correctAnswer: 'Multicast',
    },
    {
      question:
        '¿Qué principio de seguridad garantiza que los datos no sean modificados sin autorización?',
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
        '¿Qué tecnología permite gestionar redes mediante software en lugar de hardware físico?',
      options: ['CDN', 'SDN', 'VPC', 'CIDR'],
      correctAnswer: 'SDN',
    },
    {
      question:
        '¿Qué componente de una VPC permite la conexión a Internet?',
      options: [
        'NAT Gateway',
        'Internet Gateway',
        'Security Group',
        'Subred',
      ],
      correctAnswer: 'Internet Gateway',
    },
    {
      question:
        '¿Qué registro DNS dirige el correo electrónico al servidor adecuado?',
      options: ['A', 'CNAME', 'MX', 'TXT'],
      correctAnswer: 'MX',
    },
    {
      question: '¿Qué beneficio principal ofrece una CDN?',
      options: [
        'Aumentar el almacenamiento local',
        'Reducir la latencia',
        'Reemplazar servidores físicos',
        'Eliminar la necesidad de DNS',
      ],
      correctAnswer: 'Reducir la latencia',
    },
    {
      question:
        '¿Qué ataque busca sobrecargar una red con tráfico falso?',
      options: ['Phishing', 'MITM', 'DDoS', 'Spoofing'],
      correctAnswer: 'DDoS',
    },
    {
      question:
        '¿Qué protocolo se utiliza para enviar correos electrónicos?',
      options: ['HTTP', 'FTP', 'SMTP', 'SSH'],
      correctAnswer: 'SMTP',
    },
    {
      question: '¿Qué tipo de IP se asigna automáticamente por DHCP?',
      options: ['IP estática', 'IP dinámica', 'IP pública', 'IP privada'],
      correctAnswer: 'IP dinámica',
    },
    {
      question:
        '¿Qué servicio de AWS permite gestionar dominios y enrutamiento?',
      options: ['EC2', 'S3', 'Route 53', 'Lambda'],
      correctAnswer: 'Route 53',
    },
    {
      question:
        '¿Qué capa del modelo TCP/IP corresponde a las capas física y de enlace del modelo OSI?',
      options: [
        'Capa de aplicación',
        'Capa de transporte',
        'Capa de internet',
        'Capa de acceso a la red',
      ],
      correctAnswer: 'Capa de acceso a la red',
    },
    {
      question:
        '¿Qué tecnología permite conexiones seguras entre redes locales y la nube?',
      options: ['CDN', 'VPN', 'DNS', 'QoS'],
      correctAnswer: 'VPN',
    },
    {
      question:
        '¿Qué herramienta en una VPC actúa como firewall a nivel de instancia?',
      options: ['ACL', 'Security Group', 'NAT Gateway', 'Subred'],
      correctAnswer: 'Security Group',
    },
    {
      question: '¿Qué extensión de dominio es un TLD (Top-Level Domain)?',
      options: ['.com', '.example', '.corp', '.internal'],
      correctAnswer: '.com',
    },
    {
      question: '¿Qué tipo de contenido manejan principalmente las CDN?',
      options: [
        'Contenido estático',
        'Contenido en tiempo real',
        'Bases de datos relacionales',
        'Aplicaciones empresariales',
      ],
      correctAnswer: 'Contenido estático',
    },
    {
      question:
        "¿Qué principio de 'Zero Trust' se aplica en seguridad de redes?",
      options: [
        'Confiar en todos los usuarios internos',
        'Verificar siempre antes de otorgar acceso',
        'Limitar el cifrado de datos',
        'Deshabilitar firewalls',
      ],
      correctAnswer: 'Verificar siempre antes de otorgar acceso',
    },
    {
      question:
        '¿Qué componente de red dirige paquetes entre redes diferentes?',
      options: ['Switch', 'Router', 'Hub', 'Access Point'],
      correctAnswer: 'Router',
    },
    {
      question:
        "¿Qué protocolo se utiliza para realizar pruebas de conectividad como 'ping'?",
      options: ['TCP', 'UDP', 'ICMP', 'HTTP'],
      correctAnswer: 'ICMP',
    },
    {
      question: '¿Qué servicio de Google Cloud ofrece resolución de DNS?',
      options: [
        'Cloud DNS',
        'Cloud Storage',
        'BigQuery',
        'Compute Engine',
      ],
      correctAnswer: 'Cloud DNS',
    },
    {
      question:
        '¿Qué tipo de red P2P se utiliza para intercambiar archivos?',
      options: ['BitTorrent', 'AWS Direct Connect', 'HTTP/HTTPS', 'SMTP'],
      correctAnswer: 'BitTorrent',
    },
    {
      question:
        '¿Qué técnica divide una red en subredes para mejorar la gestión?',
      options: ['CIDR', 'NAT', 'QoS', 'VPN'],
      correctAnswer: 'CIDR',
    },
    {
      question:
        '¿Qué herramienta registra actividades en una VPC para auditoría?',
      options: ['CloudTrail', 'Route 53', 'EC2', 'S3'],
      correctAnswer: 'CloudTrail',
    },
    {
      question:
        '¿Qué tipo de cable utiliza pulsos de luz para transmitir datos?',
      options: ['Par trenzado', 'Coaxial', 'Fibra óptica', 'USB'],
      correctAnswer: 'Fibra óptica',
    },
    {
      question: '¿Qué beneficio ofrece el cifrado en tránsito?',
      options: [
        'Reducir el tamaño de los datos',
        'Proteger datos durante su transmisión',
        'Aumentar la velocidad de la red',
        'Eliminar la necesidad de direcciones IP',
      ],
      correctAnswer: 'Proteger datos durante su transmisión',
    },
    {
      question:
        '¿Qué capa del modelo OSI gestiona sesiones de comunicación?',
      options: [
        'Capa de sesión',
        'Capa de transporte',
        'Capa de red',
        'Capa de aplicación',
      ],
      correctAnswer: 'Capa de sesión',
    },
    {
      question:
        '¿Qué elemento de una VPC define rutas para el tráfico de red?',
      options: [
        'Security Group',
        'Routing Table',
        'NAT Gateway',
        'Subred',
      ],
      correctAnswer: 'Routing Table',
    },
    {
      question:
        '¿Qué ataque implica introducir información falsa en la caché DNS?',
      options: ['Phishing', 'DNS Spoofing', 'DDoS', 'MITM'],
      correctAnswer: 'DNS Spoofing',
    },
    {
      question:
        '¿Qué servicio de AWS permite conexiones dedicadas sin usar Internet?',
      options: [
        'VPN',
        'Direct Connect',
        'Internet Gateway',
        'NAT Gateway',
      ],
      correctAnswer: 'Direct Connect',
    },
    {
      question:
        '¿Qué protocolo asegura las comunicaciones web mediante cifrado?',
      options: ['HTTP', 'HTTPS', 'FTP', 'SSH'],
      correctAnswer: 'HTTPS',
    },
    {
      question:
        '¿Qué tecnología virtualiza funciones de red como firewalls?',
      options: ['SDN', 'NFV', 'CDN', 'VPC'],
      correctAnswer: 'NFV',
    },
    {
      question: '¿Qué tipo de dirección IP es 192.168.1.1?',
      options: ['IP pública', 'IP privada', 'IPv6', 'Dirección MAC'],
      correctAnswer: 'IP privada',
    },
    {
      question: '¿Qué herramienta prioriza tráfico crítico en una red?',
      options: ['QoS', 'NAT', 'CIDR', 'DNS'],
      correctAnswer: 'QoS',
    },
    {
      question: "¿Qué proveedor ofrece el servicio CDN 'CloudFront'?",
      options: ['Google', 'Microsoft', 'Amazon', 'Akamai'],
      correctAnswer: 'Amazon',
    },
    {
      question:
        '¿Qué componente de una CDN almacena copias de contenido?',
      options: [
        'Origin Server',
        'Edge Server',
        'DNS Server',
        'Load Balancer',
      ],
      correctAnswer: 'Edge Server',
    },
    {
      question: '¿Qué práctica mejora la seguridad en contraseñas?',
      options: [
        "Usar '123456'",
        'Combinar letras, números y símbolos',
        'Compartir contraseñas',
        'Nunca cambiarlas',
      ],
      correctAnswer: 'Combinar letras, números y símbolos',
    },
    {
      question:
        '¿Qué protocolo traduce direcciones web a IP en la capa de aplicación?',
      options: ['TCP', 'DNS', 'IP', 'HTTP'],
      correctAnswer: 'DNS',
    },
    {
      question: '¿Qué característica define una red híbrida?',
      options: [
        'Solo usa nube pública',
        'Combina nube pública y privada',
        'No utiliza Internet',
        'Es exclusivamente local',
      ],
      correctAnswer: 'Combina nube pública y privada',
    },
    {
      question:
        '¿Qué servicio en la nube proporciona AWS para redes privadas virtuales?',
      options: ['EC2', 'VPC', 'S3', 'Lambda'],
      correctAnswer: 'VPC',
    },
    {
      question:
        '¿Qué tipo de ataque busca suplantar la identidad de un usuario?',
      options: ['DDoS', 'Phishing', 'DNS Cache Poisoning', 'MITM'],
      correctAnswer: 'Phishing',
    },
    {
      question:
        '¿Qué capa del modelo OSI maneja el direccionamiento lógico?',
      options: [
        'Capa de red',
        'Capa de enlace',
        'Capa física',
        'Capa de transporte',
      ],
      correctAnswer: 'Capa de red',
    },
    {
      question: "¿Cuál es la función principal de una Red de Entrega de Contenidos (CDN) en el contexto de la computación en la nube?",
      options: [
        "Aumentar la capacidad de almacenamiento local",
        "Reducir la latencia y mejorar la velocidad de carga de contenido",
        "Eliminar la necesidad de servidores físicos",
        "Proporcionar conexiones VPN seguras"
      ],
      correctAnswer: "Reducir la latencia y mejorar la velocidad de carga de contenido"
    },
    {
      question: "¿Qué tipo de contenido gestionan principalmente las CDN y por qué es importante para plataformas como Netflix?",
      options: [
        "Contenido dinámico generado en tiempo real",
        "Contenido estático como imágenes, videos y archivos CSS/JS",
        "Bases de datos relacionales",
        "Aplicaciones empresariales"
      ],
      correctAnswer: "Contenido estático como imágenes, videos y archivos CSS/JS"
    },
    {
      question: "¿Cómo funciona el direccionamiento IP en una VPC y qué tipos de direcciones IP se utilizan?",
      options: [
        "Solo direcciones IP públicas",
        "Solo direcciones IP privadas",
        "Direcciones IP públicas y privadas",
        "Direcciones MAC"
      ],
      correctAnswer: "Direcciones IP públicas y privadas"
    },
    {
      question: "¿Qué es el Sistema de Nombres de Dominio (DNS) y por qué es crucial para la navegación en Internet?",
      options: [
        "Un protocolo para transferir archivos",
        "Un sistema que traduce nombres de dominio en direcciones IP",
        "Un firewall para proteger redes",
        "Un servicio de almacenamiento en la nube"
      ],
      correctAnswer: "Un sistema que traduce nombres de dominio en direcciones IP"
    },
    {
      question: "¿Qué son las Listas de Control de Acceso (ACLs) en una VPC y cómo se diferencian de los Grupos de Seguridad?",
      options: [
        "Las ACLs son más específicas y se aplican a nivel de instancia",
        "Las ACLs son más generales y se aplican a nivel de subred",
        "Las ACLs y los Grupos de Seguridad son lo mismo",
        "Las ACLs solo se utilizan en redes públicas"
      ],
      correctAnswer: "Las ACLs son más generales y se aplican a nivel de subred"
    },
    {
      question: "¿Qué es una subred en el contexto de una VPC y por qué es importante para la gestión de redes?",
      options: [
        "Una red independiente dentro de una VPC",
        "Una división lógica dentro de una VPC para organizar recursos",
        "Un firewall que protege la VPC",
        "Un servicio de balanceo de carga"
      ],
      correctAnswer: "Una división lógica dentro de una VPC para organizar recursos"
    },
    {
      question: "¿Qué es el enrutamiento en una VPC y cómo se configura?",
      options: [
        "El enrutamiento se configura automáticamente sin intervención del usuario",
        "El enrutamiento se configura mediante tablas de enrutamiento que definen cómo se dirige el tráfico",
        "El enrutamiento solo se aplica a subredes públicas",
        "El enrutamiento se gestiona exclusivamente mediante ACLs"
      ],
      correctAnswer: "El enrutamiento se configura mediante tablas de enrutamiento que definen cómo se dirige el tráfico"
    },
    {
      question: "¿Qué es una Puerta de Enlace NAT y cuál es su función en una VPC?",
      options: [
        "Permite que instancias en subredes privadas accedan a Internet sin exponer su dirección IP pública",
        "Proporciona conexiones VPN seguras",
        "Actúa como un firewall para bloquear todo el tráfico entrante",
        "Gestiona el tráfico entre subredes dentro de la VPC"
      ],
      correctAnswer: "Permite que instancias en subredes privadas accedan a Internet sin exponer su dirección IP pública"
    },
    {
      question: "¿Qué es una VPN Gateway en una VPC y para qué se utiliza?",
      options: [
        "Para conectar una VPC con una red local de manera segura",
        "Para gestionar el tráfico entre subredes dentro de la VPC",
        "Para proporcionar acceso a Internet a instancias en subredes privadas",
        "Para balancear la carga de tráfico entre servidores"
      ],
      correctAnswer: "Para conectar una VPC con una red local de manera segura"
    },
    {
      question: "¿Qué es el cifrado en tránsito y en reposo en el contexto de la seguridad en la nube?",
      options: [
        "El cifrado en tránsito protege los datos mientras se transmiten, y el cifrado en reposo protege los datos almacenados",
        "El cifrado en tránsito y en reposo son lo mismo",
        "El cifrado en tránsito se aplica solo a datos en movimiento dentro de la misma VPC",
        "El cifrado en reposo se aplica solo a datos en bases de datos relacionales"
      ],
      correctAnswer: "El cifrado en tránsito protege los datos mientras se transmiten, y el cifrado en reposo protege los datos almacenados"
    },
    {
      question: "¿Qué es DNSSEC y por qué es importante para la seguridad del DNS?",
      options: [
        "Una extensión de DNS que proporciona autenticación y verificación de las respuestas DNS",
        "Un protocolo para transferir archivos de manera segura",
        "Un firewall para proteger servidores DNS",
        "Un servicio de balanceo de carga para DNS"
      ],
      correctAnswer: "Una extensión de DNS que proporciona autenticación y verificación de las respuestas DNS"
    },
    {
      question: "¿Qué es el modelo Zero Trust y cómo se aplica en la seguridad de redes en la nube?",
      options: [
        "Un modelo que asume que todos los usuarios y dispositivos son confiables por defecto",
        "Un modelo que requiere verificación continua de la identidad y autorización de cada solicitud de acceso",
        "Un modelo que elimina la necesidad de firewalls",
        "Un modelo que solo se aplica a redes locales"
      ],
      correctAnswer: "Un modelo que requiere verificación continua de la identidad y autorización de cada solicitud de acceso"
    },
    {
      question: "¿Qué es una Red Privada Virtual (VPN) y cómo se utiliza en el contexto de la nube?",
      options: [
        "Una red que conecta dispositivos dentro de una VPC de manera segura",
        "Una red que permite el acceso remoto seguro a recursos en la nube",
        "Un firewall que protege una VPC",
        "Un servicio de balanceo de carga"
      ],
      correctAnswer: "Una red que permite el acceso remoto seguro a recursos en la nube"
    },
    {
      question: "¿Qué es una Nube Privada Virtual (VPC) y cómo se diferencia de una red tradicional?",
      options: [
        "Una VPC es una red física dentro de un centro de datos",
        "Una VPC es una red virtual aislada dentro de un entorno de nube",
        "Una VPC es un servicio de almacenamiento en la nube",
        "Una VPC es un firewall que protege una red local"
      ],
      correctAnswer: "Una VPC es una red virtual aislada dentro de un entorno de nube"
    },
    {
      question: "¿Qué es el balanceo de carga y por qué es importante en una VPC?",
      options: [
        "El balanceo de carga distribuye el tráfico de red entre múltiples servidores para evitar sobrecargas",
        "El balanceo de carga es un firewall que protege una VPC",
        "El balanceo de carga gestiona el tráfico entre subredes dentro de una VPC",
        "El balanceo de carga elimina la necesidad de servidores físicos"
      ],
      correctAnswer: "El balanceo de carga distribuye el tráfico de red entre múltiples servidores para evitar sobrecargas"
    },
    {
      question: "¿Qué es la segmentación de red y por qué es importante en una VPC?",
      options: [
        "La segmentación de red divide una VPC en subredes para mejorar la gestión y seguridad",
        "La segmentación de red elimina la necesidad de firewalls",
        "La segmentación de red es un servicio de almacenamiento en la nube",
        "La segmentación de red gestiona el tráfico entre subredes dentro de una VPC"
      ],
      correctAnswer: "La segmentación de red divide una VPC en subredes para mejorar la gestión y seguridad"
    },
    {
      question: "¿Qué es la autenticación multifactor (MFA) y por qué es importante en la seguridad de la nube?",
      options: [
        "Un método que requiere múltiples formas de verificación para acceder a recursos",
        "Un firewall que protege una VPC",
        "Un servicio de balanceo de carga",
        "Un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Un método que requiere múltiples formas de verificación para acceder a recursos"
    },
    {
      question: "¿Qué es la virtualización de funciones de red (NFV) y cómo se utiliza en la nube?",
      options: [
        "La NFV reemplaza dispositivos de red físicos con funciones virtualizadas en servidores estándar",
        "La NFV es un firewall que protege una VPC",
        "La NFV es un servicio de almacenamiento en la nube",
        "La NFV gestiona el tráfico entre subredes dentro de una VPC"
      ],
      correctAnswer: "La NFV reemplaza dispositivos de red físicos con funciones virtualizadas en servidores estándar"
    },
    {
      question: "¿Qué es una Red de Área Local (LAN) y cómo se diferencia de una Red de Área Metropolitana (MAN)?",
      options: [
        "Una LAN conecta dispositivos dentro de un área limitada, mientras que una MAN cubre un área más grande",
        "Una LAN y una MAN son lo mismo",
        "Una LAN es una red que conecta dispositivos en diferentes países",
        "Una MAN es una red que conecta dispositivos dentro de un edificio"
      ],
      correctAnswer: "Una LAN conecta dispositivos dentro de un área limitada, mientras que una MAN cubre un área más grande"
    },
    {
      question: "¿Qué es una Red de Área Amplia (WAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WAN abarca una gran extensión geográfica y conecta redes en diferentes ubicaciones",
        "Una WAN es una red que conecta dispositivos dentro de un edificio",
        "Una WAN es una red que conecta dispositivos dentro de una ciudad",
        "Una WAN es un firewall que protege una VPC"
      ],
      correctAnswer: "Una WAN abarca una gran extensión geográfica y conecta redes en diferentes ubicaciones"
    },
    {
      question: "¿Qué es una Red de Área de Almacenamiento (SAN) y cómo se utiliza en la nube?",
      options: [
        "Una SAN es una red especializada en la transferencia y almacenamiento de datos a alta velocidad",
        "Una SAN es una red que conecta dispositivos dentro de un edificio",
        "Una SAN es un firewall que protege una VPC",
        "Una SAN es un servicio de balanceo de carga"
      ],
      correctAnswer: "Una SAN es una red especializada en la transferencia y almacenamiento de datos a alta velocidad"
    },
    {
      question: "¿Qué es una Red de Área Personal (PAN) y cómo se utiliza en la vida cotidiana?",
      options: [
        "Una PAN es una red que conecta dispositivos personales dentro de un área reducida",
        "Una PAN es una red que conecta dispositivos en diferentes países",
        "Una PAN es un firewall que protege una VPC",
        "Una PAN es un servicio de balanceo de carga"
      ],
      correctAnswer: "Una PAN es una red que conecta dispositivos personales dentro de un área reducida"
    },
    {
      question: "¿Qué es una red convergente y cómo se utiliza en la computación en la nube?",
      options: [
        "Una red convergente entregan datos, voz y video entre muchos tipos diferentes de dispositivos a través de la misma infraestructura de red",
        "Una red convergente es una red que conecta dispositivos dentro de un edificio",
        "Una red convergente es un firewall que protege una VPC",
        "Una red convergente es un servicio de balanceo de carga"
      ],
      correctAnswer: "Una red convergente entregan datos, voz y video entre muchos tipos diferentes de dispositivos a través de la misma infraestructura de red"
    },
    {
      question: "¿Qué es Packet Tracer y cómo se utiliza en la enseñanza de redes?",
      options: [
        "Packet Tracer es un programa de software flexible que permite utilizar representaciones de red y teorías para construir modelos de red y explorar LAN y WAN complejas",
        "Packet Tracer es un firewall que protege una VPC",
        "Packet Tracer es un servicio de balanceo de carga",
        "Packet Tracer es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Packet Tracer es un programa de software flexible que permite utilizar representaciones de red y teorías para construir modelos de red y explorar LAN y WAN complejas"
    },
    {
      question: "¿Qué es la Calidad de Servicio (QoS) y cómo se utiliza en la gestión de redes?",
      options: [
        "La QoS es un mecanismo principal para gestionar la congestión y garantizar la entrega confiable de contenido a todos los usuarios",
        "La QoS es un firewall que protege una VPC",
        "La QoS es un servicio de balanceo de carga",
        "La QoS es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "La QoS es un mecanismo principal para gestionar la congestión y garantizar la entrega confiable de contenido a todos los usuarios"
    },
    {
      question: "¿Qué es el análisis predictivo y cómo se utiliza en la seguridad de redes?",
      options: [
        "El análisis predictivo utiliza herramientas como el aprendizaje automático y las redes neuronales para detectar patrones sospechosos y mejorar la autenticación en tiempo real",
        "El análisis predictivo es un firewall que protege una VPC",
        "El análisis predictivo es un servicio de balanceo de carga",
        "El análisis predictivo es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "El análisis predictivo utiliza herramientas como el aprendizaje automático y las redes neuronales para detectar patrones sospechosos y mejorar la autenticación en tiempo real"
    },
    {
      question: "¿Qué es la inteligencia artificial y cómo se utiliza en la seguridad de redes?",
      options: [
        "La inteligencia artificial se utiliza para detectar patrones sospechosos y mejorar la autenticación en tiempo real",
        "La inteligencia artificial es un firewall que protege una VPC",
        "La inteligencia artificial es un servicio de balanceo de carga",
        "La inteligencia artificial es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "La inteligencia artificial se utiliza para detectar patrones sospechosos y mejorar la autenticación en tiempo real"
    },
    {
      question: "¿Qué es la virtualización y cómo se utiliza en la computación en la nube?",
      options: [
        "La virtualización permite crear un entorno controlado aislado de redes externas y ofrece una plataforma segura para el análisis de la seguridad de la información",
        "La virtualización es un firewall que protege una VPC",
        "La virtualización es un servicio de balanceo de carga",
        "La virtualización es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "La virtualización permite crear un entorno controlado aislado de redes externas y ofrece una plataforma segura para el análisis de la seguridad de la información"
    },
    {
      question: "¿Qué es la computación en la nube y cómo se utiliza en la actualidad?",
      options: [
        "La computación en la nube permite almacenar archivos personales y hacer copias de seguridad de una unidad completa en servidores a través de Internet",
        "La computación en la nube es un firewall que protege una VPC",
        "La computación en la nube es un servicio de balanceo de carga",
        "La computación en la nube es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "La computación en la nube permite almacenar archivos personales y hacer copias de seguridad de una unidad completa en servidores a través de Internet"
    },
    {
      question: "¿Qué es una red escalable y cómo se utiliza en la computación en la nube?",
      options: [
        "Una red escalable se expande rápidamente para admitir nuevos usuarios y aplicaciones siguiendo estándares y protocolos aceptados",
        "Una red escalable es un firewall que protege una VPC",
        "Una red escalable es un servicio de balanceo de carga",
        "Una red escalable es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una red escalable se expande rápidamente para admitir nuevos usuarios y aplicaciones siguiendo estándares y protocolos aceptados"
    },
    {
      question: "¿Qué es un centro de datos y cómo se utiliza en la computación en la nube?",
      options: [
        "Un centro de datos es una instalación utilizada para alojar sistemas informáticos y componentes asociados",
        "Un centro de datos es un firewall que protege una VPC",
        "Un centro de datos es un servicio de balanceo de carga",
        "Un centro de datos es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Un centro de datos es una instalación utilizada para alojar sistemas informáticos y componentes asociados"
    },
    {
      question: "¿Qué es una red convergente y cómo se utiliza en la computación en la nube?",
      options: [
        "Una red convergente entregan datos, voz y video entre muchos tipos diferentes de dispositivos a través de la misma infraestructura de red",
        "Una red convergente es un firewall que protege una VPC",
        "Una red convergente es un servicio de balanceo de carga",
        "Una red convergente es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una red convergente entregan datos, voz y video entre muchos tipos diferentes de dispositivos a través de la misma infraestructura de red"
    },
    {
      question: "¿Qué es una red de conmutación de circuitos y cómo se utiliza en la computación en la nube?",
      options: [
        "Una red de conmutación de circuitos puede aprender dinámicamente y utilizar circuitos redundantes",
        "Una red de conmutación de circuitos es un firewall que protege una VPC",
        "Una red de conmutación de circuitos es un servicio de balanceo de carga",
        "Una red de conmutación de circuitos es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una red de conmutación de circuitos puede aprender dinámicamente y utilizar circuitos redundantes"
    },
    {
      question: "¿Qué es una red de conmutación de paquetes y cómo se utiliza en la computación en la nube?",
      options: [
        "Una red de conmutación de paquetes divide los datos en paquetes y los envía de manera independiente a través de la red",
        "Una red de conmutación de paquetes es un firewall que protege una VPC",
        "Una red de conmutación de paquetes es un servicio de balanceo de carga",
        "Una red de conmutación de paquetes es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una red de conmutación de paquetes divide los datos en paquetes y los envía de manera independiente a través de la red"
    },
    {
      question: "¿Qué es una red de área local inalámbrica (WLAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WLAN permite la conexión de dispositivos a una red de forma inalámbrica utilizando tecnologías como Wi-Fi",
        "Una WLAN es un firewall que protege una VPC",
        "Una WLAN es un servicio de balanceo de carga",
        "Una WLAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WLAN permite la conexión de dispositivos a una red de forma inalámbrica utilizando tecnologías como Wi-Fi"
    },
    {
      question: "¿Qué es una red de área metropolitana inalámbrica (WMAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WMAN cubre un área más grande que una WLAN y utiliza tecnologías como WiMAX para conectar dispositivos",
        "Una WMAN es un firewall que protege una VPC",
        "Una WMAN es un servicio de balanceo de carga",
        "Una WMAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WMAN cubre un área más grande que una WLAN y utiliza tecnologías como WiMAX para conectar dispositivos"
    },
    {
      question: "¿Qué es una red de área amplia inalámbrica (WWAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WWAN abarca una gran extensión geográfica y utiliza tecnologías como 4G y 5G para conectar dispositivos",
        "Una WWAN es un firewall que protege una VPC",
        "Una WWAN es un servicio de balanceo de carga",
        "Una WWAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WWAN abarca una gran extensión geográfica y utiliza tecnologías como 4G y 5G para conectar dispositivos"
    },
    {
      question: "¿Qué es una red de área personal inalámbrica (WPAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WPAN conecta dispositivos personales dentro de un área reducida utilizando tecnologías como Bluetooth",
        "Una WPAN es un firewall que protege una VPC",
        "Una WPAN es un servicio de balanceo de carga",
        "Una WPAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WPAN conecta dispositivos personales dentro de un área reducida utilizando tecnologías como Bluetooth"
    },
    {
      question: "¿Qué es una red de área local (LAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una LAN conecta dispositivos dentro de un área limitada, como una casa, oficina o edificio",
        "Una LAN es un firewall que protege una VPC",
        "Una LAN es un servicio de balanceo de carga",
        "Una LAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una LAN conecta dispositivos dentro de un área limitada, como una casa, oficina o edificio"
    },
    {
      question: "¿Qué es una red de área metropolitana (MAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una MAN cubre un área más grande que una LAN, como una ciudad o campus universitario",
        "Una MAN es un firewall que protege una VPC",
        "Una MAN es un servicio de balanceo de carga",
        "Una MAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una MAN cubre un área más grande que una LAN, como una ciudad o campus universitario"
    },
    {
      question: "¿Qué es una red de área amplia (WAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WAN abarca una gran extensión geográfica, como un país o el mundo",
        "Una WAN es un firewall que protege una VPC",
        "Una WAN es un servicio de balanceo de carga",
        "Una WAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WAN abarca una gran extensión geográfica, como un país o el mundo"
    },
    {
      question: "¿Qué es una red de área de almacenamiento (SAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una SAN es una red especializada en la transferencia y almacenamiento de datos a alta velocidad",
        "Una SAN es un firewall que protege una VPC",
        "Una SAN es un servicio de balanceo de carga",
        "Una SAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una SAN es una red especializada en la transferencia y almacenamiento de datos a alta velocidad"
    },
    {
      question: "¿Qué es una red de área personal (PAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una PAN es una red que conecta dispositivos personales dentro de un área reducida",
        "Una PAN es un firewall que protege una VPC",
        "Una PAN es un servicio de balanceo de carga",
        "Una PAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una PAN es una red que conecta dispositivos personales dentro de un área reducida"
    },
    {
      question: "¿Qué es una red convergente y cómo se utiliza en la computación en la nube?",
      options: [
        "Una red convergente entregan datos, voz y video entre muchos tipos diferentes de dispositivos a través de la misma infraestructura de red",
        "Una red convergente es un firewall que protege una VPC",
        "Una red convergente es un servicio de balanceo de carga",
        "Una red convergente es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una red convergente entregan datos, voz y video entre muchos tipos diferentes de dispositivos a través de la misma infraestructura de red"
    },
    {
      question: "¿Qué es una red de conmutación de circuitos y cómo se utiliza en la computación en la nube?",
      options: [
        "Una red de conmutación de circuitos puede aprender dinámicamente y utilizar circuitos redundantes",
        "Una red de conmutación de circuitos es un firewall que protege una VPC",
        "Una red de conmutación de circuitos es un servicio de balanceo de carga",
        "Una red de conmutación de circuitos es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una red de conmutación de circuitos puede aprender dinámicamente y utilizar circuitos redundantes"
    },
    {
      question: "¿Qué es una red de conmutación de paquetes y cómo se utiliza en la computación en la nube?",
      options: [
        "Una red de conmutación de paquetes divide los datos en paquetes y los envía de manera independiente a través de la red",
        "Una red de conmutación de paquetes es un firewall que protege una VPC",
        "Una red de conmutación de paquetes es un servicio de balanceo de carga",
        "Una red de conmutación de paquetes es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una red de conmutación de paquetes divide los datos en paquetes y los envía de manera independiente a través de la red"
    },
    {
      question: "¿Qué es una red de área local inalámbrica (WLAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WLAN permite la conexión de dispositivos a una red de forma inalámbrica utilizando tecnologías como Wi-Fi",
        "Una WLAN es un firewall que protege una VPC",
        "Una WLAN es un servicio de balanceo de carga",
        "Una WLAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WLAN permite la conexión de dispositivos a una red de forma inalámbrica utilizando tecnologías como Wi-Fi"
    },
    {
      question: "¿Qué es una red de área metropolitana inalámbrica (WMAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WMAN cubre un área más grande que una WLAN y utiliza tecnologías como WiMAX para conectar dispositivos",
        "Una WMAN es un firewall que protege una VPC",
        "Una WMAN es un servicio de balanceo de carga",
        "Una WMAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WMAN cubre un área más grande que una WLAN y utiliza tecnologías como WiMAX para conectar dispositivos"
    },
    {
      question: "¿Qué es una red de área amplia inalámbrica (WWAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WWAN abarca una gran extensión geográfica y utiliza tecnologías como 4G y 5G para conectar dispositivos",
        "Una WWAN es un firewall que protege una VPC",
        "Una WWAN es un servicio de balanceo de carga",
        "Una WWAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WWAN abarca una gran extensión geográfica y utiliza tecnologías como 4G y 5G para conectar dispositivos"
    },
    {
      question: "¿Qué es una red de área personal inalámbrica (WPAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WPAN conecta dispositivos personales dentro de un área reducida utilizando tecnologías como Bluetooth",
        "Una WPAN es un firewall que protege una VPC",
        "Una WPAN es un servicio de balanceo de carga",
        "Una WPAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WPAN conecta dispositivos personales dentro de un área reducida utilizando tecnologías como Bluetooth"
    },
    {
      question: "¿Qué es una red de área local (LAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una LAN conecta dispositivos dentro de un área limitada, como una casa, oficina o edificio",
        "Una LAN es un firewall que protege una VPC",
        "Una LAN es un servicio de balanceo de carga",
        "Una LAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una LAN conecta dispositivos dentro de un área limitada, como una casa, oficina o edificio"
    },
    {
      question: "¿Qué es una red de área metropolitana (MAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una MAN cubre un área más grande que una LAN, como una ciudad o campus universitario",
        "Una MAN es un firewall que protege una VPC",
        "Una MAN es un servicio de balanceo de carga",
        "Una MAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una MAN cubre un área más grande que una LAN, como una ciudad o campus universitario"
    },
    {
      question: "¿Qué es una red de área amplia (WAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WAN abarca una gran extensión geográfica, como un país o el mundo",
        "Una WAN es un firewall que protege una VPC",
        "Una WAN es un servicio de balanceo de carga",
        "Una WAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WAN abarca una gran extensión geográfica, como un país o el mundo"
    },
    {
      question: "¿Qué es una red de área de almacenamiento (SAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una SAN es una red especializada en la transferencia y almacenamiento de datos a alta velocidad",
        "Una SAN es un firewall que protege una VPC",
        "Una SAN es un servicio de balanceo de carga",
        "Una SAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una SAN es una red especializada en la transferencia y almacenamiento de datos a alta velocidad"
    },
    {
      question: "¿Qué es una red de área personal (PAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una PAN es una red que conecta dispositivos personales dentro de un área reducida",
        "Una PAN es un firewall que protege una VPC",
        "Una PAN es un servicio de balanceo de carga",
        "Una PAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una PAN es una red que conecta dispositivos personales dentro de un área reducida"
    },
    {
      question: "¿Qué es una red convergente y cómo se utiliza en la computación en la nube?",
      options: [
        "Una red convergente entregan datos, voz y video entre muchos tipos diferentes de dispositivos a través de la misma infraestructura de red",
        "Una red convergente es un firewall que protege una VPC",
        "Una red convergente es un servicio de balanceo de carga",
        "Una red convergente es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una red convergente entregan datos, voz y video entre muchos tipos diferentes de dispositivos a través de la misma infraestructura de red"
    },
    {
      question: "¿Qué es una red de conmutación de circuitos y cómo se utiliza en la computación en la nube?",
      options: [
        "Una red de conmutación de circuitos puede aprender dinámicamente y utilizar circuitos redundantes",
        "Una red de conmutación de circuitos es un firewall que protege una VPC",
        "Una red de conmutación de circuitos es un servicio de balanceo de carga",
        "Una red de conmutación de circuitos es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una red de conmutación de circuitos puede aprender dinámicamente y utilizar circuitos redundantes"
    },
    {
      question: "¿Qué es una red de conmutación de paquetes y cómo se utiliza en la computación en la nube?",
      options: [
        "Una red de conmutación de paquetes divide los datos en paquetes y los envía de manera independiente a través de la red",
        "Una red de conmutación de paquetes es un firewall que protege una VPC",
        "Una red de conmutación de paquetes es un servicio de balanceo de carga",
        "Una red de conmutación de paquetes es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una red de conmutación de paquetes divide los datos en paquetes y los envía de manera independiente a través de la red"
    },
    {
      question: "¿Qué es una red de área local inalámbrica (WLAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WLAN permite la conexión de dispositivos a una red de forma inalámbrica utilizando tecnologías como Wi-Fi",
        "Una WLAN es un firewall que protege una VPC",
        "Una WLAN es un servicio de balanceo de carga",
        "Una WLAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WLAN permite la conexión de dispositivos a una red de forma inalámbrica utilizando tecnologías como Wi-Fi"
    },
    {
      question: "¿Qué es una red de área metropolitana inalámbrica (WMAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WMAN cubre un área más grande que una WLAN y utiliza tecnologías como WiMAX para conectar dispositivos",
        "Una WMAN es un firewall que protege una VPC",
        "Una WMAN es un servicio de balanceo de carga",
        "Una WMAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WMAN cubre un área más grande que una WLAN y utiliza tecnologías como WiMAX para conectar dispositivos"
    },
    {
      question: "¿Qué es una red de área amplia inalámbrica (WWAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WWAN abarca una gran extensión geográfica y utiliza tecnologías como 4G y 5G para conectar dispositivos",
        "Una WWAN es un firewall que protege una VPC",
        "Una WWAN es un servicio de balanceo de carga",
        "Una WWAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WWAN abarca una gran extensión geográfica y utiliza tecnologías como 4G y 5G para conectar dispositivos"
    },
    {
      question: "¿Qué es una red de área personal inalámbrica (WPAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WPAN conecta dispositivos personales dentro de un área reducida utilizando tecnologías como Bluetooth",
        "Una WPAN es un firewall que protege una VPC",
        "Una WPAN es un servicio de balanceo de carga",
        "Una WPAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WPAN conecta dispositivos personales dentro de un área reducida utilizando tecnologías como Bluetooth"
    },
    {
      question: "¿Qué es una red de área local (LAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una LAN conecta dispositivos dentro de un área limitada, como una casa, oficina o edificio",
        "Una LAN es un firewall que protege una VPC",
        "Una LAN es un servicio de balanceo de carga",
        "Una LAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una LAN conecta dispositivos dentro de un área limitada, como una casa, oficina o edificio"
    },
    {
      question: "¿Qué es una red de área metropolitana (MAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una MAN cubre un área más grande que una LAN, como una ciudad o campus universitario",
        "Una MAN es un firewall que protege una VPC",
        "Una MAN es un servicio de balanceo de carga",
        "Una MAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una MAN cubre un área más grande que una LAN, como una ciudad o campus universitario"
    },
    {
      question: "¿Qué es una red de área amplia (WAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WAN abarca una gran extensión geográfica, como un país o el mundo",
        "Una WAN es un firewall que protege una VPC",
        "Una WAN es un servicio de balanceo de carga",
        "Una WAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WAN abarca una gran extensión geográfica, como un país o el mundo"
    },
    {
      question: "¿Qué es una red de área de almacenamiento (SAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una SAN es una red especializada en la transferencia y almacenamiento de datos a alta velocidad",
        "Una SAN es un firewall que protege una VPC",
        "Una SAN es un servicio de balanceo de carga",
        "Una SAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una SAN es una red especializada en la transferencia y almacenamiento de datos a alta velocidad"
    },
    {
      question: "¿Qué es una red de área personal (PAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una PAN es una red que conecta dispositivos personales dentro de un área reducida",
        "Una PAN es un firewall que protege una VPC",
        "Una PAN es un servicio de balanceo de carga",
        "Una PAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una PAN es una red que conecta dispositivos personales dentro de un área reducida"
    },
    {
      question: "¿Qué es una red convergente y cómo se utiliza en la computación en la nube?",
      options: [
        "Una red convergente entregan datos, voz y video entre muchos tipos diferentes de dispositivos a través de la misma infraestructura de red",
        "Una red convergente es un firewall que protege una VPC",
        "Una red convergente es un servicio de balanceo de carga",
        "Una red convergente es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una red convergente entregan datos, voz y video entre muchos tipos diferentes de dispositivos a través de la misma infraestructura de red"
    },
    {
      question: "¿Qué es una red de conmutación de circuitos y cómo se utiliza en la computación en la nube?",
      options: [
        "Una red de conmutación de circuitos puede aprender dinámicamente y utilizar circuitos redundantes",
        "Una red de conmutación de circuitos es un firewall que protege una VPC",
        "Una red de conmutación de circuitos es un servicio de balanceo de carga",
        "Una red de conmutación de circuitos es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una red de conmutación de circuitos puede aprender dinámicamente y utilizar circuitos redundantes"
    },
    {
      question: "¿Qué es una red de conmutación de paquetes y cómo se utiliza en la computación en la nube?",
      options: [
        "Una red de conmutación de paquetes divide los datos en paquetes y los envía de manera independiente a través de la red",
        "Una red de conmutación de paquetes es un firewall que protege una VPC",
        "Una red de conmutación de paquetes es un servicio de balanceo de carga",
        "Una red de conmutación de paquetes es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una red de conmutación de paquetes divide los datos en paquetes y los envía de manera independiente a través de la red"
    },
    {
      question: "¿Qué es una red de área local inalámbrica (WLAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WLAN permite la conexión de dispositivos a una red de forma inalámbrica utilizando tecnologías como Wi-Fi",
        "Una WLAN es un firewall que protege una VPC",
        "Una WLAN es un servicio de balanceo de carga",
        "Una WLAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WLAN permite la conexión de dispositivos a una red de forma inalámbrica utilizando tecnologías como Wi-Fi"
    },
    {
      question: "¿Qué es una red de área metropolitana inalámbrica (WMAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WMAN cubre un área más grande que una WLAN y utiliza tecnologías como WiMAX para conectar dispositivos",
        "Una WMAN es un firewall que protege una VPC",
        "Una WMAN es un servicio de balanceo de carga",
        "Una WMAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WMAN cubre un área más grande que una WLAN y utiliza tecnologías como WiMAX para conectar dispositivos"
    },
    {
      question: "¿Qué es una red de área amplia inalámbrica (WWAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WWAN abarca una gran extensión geográfica y utiliza tecnologías como 4G y 5G para conectar dispositivos",
        "Una WWAN es un firewall que protege una VPC",
        "Una WWAN es un servicio de balanceo de carga",
        "Una WWAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WWAN abarca una gran extensión geográfica y utiliza tecnologías como 4G y 5G para conectar dispositivos"
    },
    {
      question: "¿Qué es una red de área personal inalámbrica (WPAN) y cómo se utiliza en la computación en la nube?",
      options: [
        "Una WPAN conecta dispositivos personales dentro de un área reducida utilizando tecnologías como Bluetooth",
        "Una WPAN es un firewall que protege una VPC",
        "Una WPAN es un servicio de balanceo de carga",
        "Una WPAN es un protocolo para transferir archivos de manera segura"
      ],
      correctAnswer: "Una WPAN conecta dispositivos personales dentro de un área reducida utilizando tecnologías como Bluetooth"
    }
  ],
  servicios: [
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
        "¿Qué concepto diferencia la Computación sin Servidor (Serverless Computing) de otros modelos en la nube,?",
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
        "¿Qué ventaja ofrece el uso de servicios de contenedores en un clúster administrado,?",
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
        "¿Qué elemento es fundamental para la optimización de costes en máquinas virtuales,?",
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
  ],
}
