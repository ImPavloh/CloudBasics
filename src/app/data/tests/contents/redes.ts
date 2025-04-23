import { Question } from '../types'

export const redes: Question[] = [
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
]