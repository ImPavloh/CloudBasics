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
        '¿Qué modelo de despliegue usa Netflix según el documento?',
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
        '¿Qué desafío presenta la computación cuántica en la nube según el documento?',
      options: [
        'Alto costo de implementación',
        'Baja velocidad de procesamiento',
        'Incompatibilidad con sistemas existentes',
        'Es una tecnología emergente con potencial',
      ],
      correctAnswer: 'Es una tecnología emergente con potencial',
    },
  ],
}
