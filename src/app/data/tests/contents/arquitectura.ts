import { Question } from '../types'

export const arquitectura: Question[] = [
  {
    question: '¿Cuál es una característica clave de la arquitectura en la nube?',
    options: [
      'Dependencia de servidores físicos',
      'Escalabilidad',
      'Costos iniciales elevados',
      'Acceso limitado a recursos',
    ],
    correctAnswer: 'Escalabilidad',
  },
  {
    question: '¿Qué servicio de AWS proporciona instancias de cómputo bajo demanda?',
    options: [
      'Amazon S3',
      'Amazon EC2',
      'Amazon RDS',
      'AWS Lambda',
    ],
    correctAnswer: 'Amazon EC2',
  },
  {
    question: '¿Cuál es uno de los pilares del AWS Well-Architected Framework?',
    options: [
      'Gestión manual',
      'Excelencia operacional',
      'Dependencia de hardware',
      'Alta latencia',
    ],
    correctAnswer: 'Excelencia operacional',
  },
  {
    question: '¿Qué principio de excelencia operacional implica tratar la infraestructura como código?',
    options: [
      'Realizar operaciones como código',
      'Documentar procesos operativos',
      'Anticiparse a fallos',
      'Medir la eficiencia operativa',
    ],
    correctAnswer: 'Realizar operaciones como código',
  },
  {
    question: '¿Qué servicio de AWS permite monitorear el rendimiento de los sistemas en tiempo real?',
    options: [
      'AWS CloudFormation',
      'Amazon CloudWatch',
      'AWS Systems Manager',
      'AWS Lambda',
    ],
    correctAnswer: 'Amazon CloudWatch',
  },
  {
    question: '¿Qué componente del modelo de responsabilidad compartida es responsabilidad del cliente en la nube?',
    options: [
      'Proteger la infraestructura física',
      'Configurar herramientas de seguridad',
      'Garantizar el funcionamiento de los servicios',
      'Implementar medidas de encriptación globales',
    ],
    correctAnswer: 'Configurar herramientas de seguridad',
  },
  {
    question: '¿Qué servicio de AWS protege contra ataques DDoS?',
    options: [
      'AWS Shield',
      'AWS IAM',
      'Amazon GuardDuty',
      'AWS KMS',
    ],
    correctAnswer: 'AWS Shield',
  },
  {
    question: '¿Qué estrategia mejora la fiabilidad de un sistema en la nube?',
    options: [
      'Redundancia',
      'Dependencia de un único servidor',
      'Configuración manual',
      'Almacenamiento local',
    ],
    correctAnswer: 'Redundancia',
  },
  {
    question: '¿Qué servicio de AWS permite replicar datos de un bucket S3 a otra región?',
    options: [
      'Amazon RDS Multi-AZ',
      'Amazon S3 Cross-Region Replication',
      'AWS Auto Scaling',
      'Elastic Load Balancing',
    ],
    correctAnswer: 'Amazon S3 Cross-Region Replication',
  },
  {
    question: '¿Qué servicio de AWS distribuye tráfico entre múltiples servidores para evitar sobrecargas?',
    options: [
      'Amazon CloudFront',
      'Elastic Load Balancing',
      'AWS Auto Scaling',
      'Amazon VPC',
    ],
    correctAnswer: 'Elastic Load Balancing',
  },
  {
    question: '¿Qué servicio de AWS recomienda instancias adecuadas para maximizar el rendimiento?',
    options: [
      'AWS Compute Optimizer',
      'Amazon CloudWatch',
      'AWS Trusted Advisor',
      'AWS CloudFormation',
    ],
    correctAnswer: 'AWS Compute Optimizer',
  },
  {
    question: '¿Qué servicio de AWS proporciona almacenamiento en caché para reducir la latencia?',
    options: [
      'Amazon S3',
      'Amazon RDS',
      'Amazon ElastiCache',
      'AWS Lambda',
    ],
    correctAnswer: 'Amazon ElastiCache',
  },
  {
    question: '¿Qué servicio de AWS optimiza la conectividad global y reduce la latencia?',
    options: [
      'Amazon VPC',
      'AWS Global Accelerator',
      'Amazon CloudFront',
      'AWS Direct Connect',
    ],
    correctAnswer: 'AWS Global Accelerator',
  },
  {
    question: '¿Qué concepto clave mejora la eficiencia en el rendimiento al añadir más servidores?',
    options: [
      'Escalabilidad vertical',
      'Escalabilidad horizontal',
      'Balanceo de carga',
      'Optimización de instancias',
    ],
    correctAnswer: 'Escalabilidad horizontal',
  },
  {
    question: '¿Qué servicio de AWS permite analizar y visualizar costos en la nube?',
    options: [
      'AWS Budgets',
      'AWS Cost Explorer',
      'AWS Trusted Advisor',
      'Amazon CloudWatch',
    ],
    correctAnswer: 'AWS Cost Explorer',
  },
  {
    question: '¿Qué modelo de pago en AWS ofrece descuentos significativos para cargas de trabajo flexibles?',
    options: [
      'Instancias bajo demanda',
      'Instancias reservadas',
      'Instancias spot',
      'AWS Savings Plans',
    ],
    correctAnswer: 'Instancias spot',
  },
  {
    question: '¿Qué servicio de AWS mueve automáticamente los datos entre clases de almacenamiento según la frecuencia de acceso?',
    options: [
      'Amazon S3 Intelligent-Tiering',
      'Amazon S3 Glacier',
      'Amazon EBS Snapshots',
      'AWS Backup',
    ],
    correctAnswer: 'Amazon S3 Intelligent-Tiering',
  },
  {
    question: '¿Qué servicio de AWS reduce costos de transferencia de datos mediante caché distribuido?',
    options: [
      'AWS Direct Connect',
      'Amazon CloudFront',
      'VPC Peering',
      'AWS Global Accelerator',
    ],
    correctAnswer: 'Amazon CloudFront',
  },
  {
    question: '¿Qué servicio de AWS permite revisar arquitecturas basándose en mejores prácticas?',
    options: [
      'AWS Well-Architected Tool',
      'AWS Pricing Calculator',
      'AWS Architecture Center',
      'AWS CloudFormation',
    ],
    correctAnswer: 'AWS Well-Architected Tool',
  },
  {
    question: '¿Qué servicio de AWS permite definir infraestructura con archivos JSON o YAML?',
    options: [
      'AWS CDK',
      'AWS CloudFormation',
      'AWS Step Functions',
      'AWS OpsWorks',
    ],
    correctAnswer: 'AWS CloudFormation',
  },
  {
    question: '¿Qué servicio de AWS registra eventos y cambios en la infraestructura para auditorías?',
    options: [
      'Amazon CloudWatch',
      'AWS CloudTrail',
      'AWS Config',
      'AWS Trusted Advisor',
    ],
    correctAnswer: 'AWS CloudTrail',
  },
  {
    question: '¿Qué servicio de AWS facilita la creación y gestión de APIs?',
    options: [
      'Amazon EventBridge',
      'Amazon API Gateway',
      'AWS Direct Connect',
      'AWS Step Functions',
    ],
    correctAnswer: 'Amazon API Gateway',
  },
  {
    question: '¿Qué pilar del Well-Architected Framework minimiza el impacto ambiental de la infraestructura?',
    options: [
      'Seguridad',
      'Sostenibilidad',
      'Fiabilidad',
      'Eficiencia en el rendimiento',
    ],
    correctAnswer: 'Sostenibilidad',
  },
  {
    question: '¿Qué servicio de AWS permite ejecutar funciones sin administrar servidores?',
    options: [
      'Amazon EC2',
      'AWS Lambda',
      'Amazon RDS',
      'AWS Fargate',
    ],
    correctAnswer: 'AWS Lambda',
  },
  {
    question: '¿Qué práctica de seguridad en la nube protege los datos durante la transmisión?',
    options: [
      'Control de accesos',
      'Cifrado de datos',
      'Gestión de parches',
      'Copias de seguridad',
    ],
    correctAnswer: 'Cifrado de datos',
  },
  {
    question: '¿Qué servicio de AWS detecta actividades sospechosas en la nube?',
    options: [
      'AWS IAM',
      'Amazon GuardDuty',
      'AWS Shield',
      'AWS KMS',
    ],
    correctAnswer: 'Amazon GuardDuty',
  },
  {
    question: '¿Qué estrategia de fiabilidad almacena copias de datos en múltiples ubicaciones?',
    options: [
      'Escalabilidad automática',
      'Redundancia',
      'Balanceo de carga',
      'Monitoreo continuo',
    ],
    correctAnswer: 'Redundancia',
  },
  {
    question: '¿Qué servicio de AWS proporciona copias de seguridad automatizadas de datos y aplicaciones?',
    options: [
      'AWS Backup',
      'Amazon S3 Glacier',
      'AWS Disaster Recovery',
      'Amazon RDS Multi-AZ',
    ],
    correctAnswer: 'AWS Backup',
  },
  {
    question: '¿Qué servicio de AWS analiza el comportamiento de aplicaciones para detectar cuellos de botella?',
    options: [
      'AWS X-Ray',
      'Amazon CloudWatch',
      'AWS Trusted Advisor',
      'AWS Config',
    ],
    correctAnswer: 'AWS X-Ray',
  },
  {
    question: '¿Qué concepto clave en la optimización de costos evita pagar por capacidad infrautilizada?',
    options: [
      'Escalabilidad automática',
      'Compresión de datos',
      'Uso de redes privadas',
      'Análisis de facturación',
    ],
    correctAnswer: 'Escalabilidad automática',
  },
  {
    question: '¿Qué servicio de AWS permite orquestar procesos automatizados en la nube?',
    options: [
      'AWS Lambda',
      'AWS Step Functions',
      'AWS OpsWorks',
      'Amazon API Gateway',
    ],
    correctAnswer: 'AWS Step Functions',
  },
  {
    question: '¿Qué servicio de AWS proporciona conexiones privadas entre la infraestructura local y AWS?',
    options: [
      'Amazon CloudFront',
      'AWS Direct Connect',
      'VPC Peering',
      'AWS Global Accelerator',
    ],
    correctAnswer: 'AWS Direct Connect',
  },
  {
    question: '¿Qué principio de excelencia operacional reduce errores humanos en la gestión de la nube?',
    options: [
      'Documentar procesos',
      'Automatizar procesos',
      'Medir la eficiencia operativa',
      'Anticiparse a fallos',
    ],
    correctAnswer: 'Automatizar procesos',
  },
  {
    question: '¿Qué servicio de AWS ofrece almacenamiento de bajo costo para archivos de acceso infrecuente?',
    options: [
      'Amazon S3',
      'Amazon S3 Glacier',
      'Amazon EBS',
      'Amazon ElastiCache',
    ],
    correctAnswer: 'Amazon S3 Glacier',
  },
  {
    question: '¿Qué pilar del Well-Architected Framework optimiza el uso de recursos computacionales?',
    options: [
      'Seguridad',
      'Fiabilidad',
      'Eficiencia en el rendimiento',
      'Optimización de costos',
    ],
    correctAnswer: 'Eficiencia en el rendimiento',
  },
  {
    question: '¿Qué servicio de AWS permite ajustar automáticamente la capacidad de los servidores según la demanda?',
    options: [
      'AWS Auto Scaling',
      'Amazon CloudFront',
      'AWS CloudFormation',
      'Amazon RDS',
    ],
    correctAnswer: 'AWS Auto Scaling',
  },
  {
    question: '¿Qué práctica de seguridad en la nube garantiza que solo personas autorizadas accedan a los datos?',
    options: [
      'Cifrado de datos',
      'Control de accesos',
      'Monitoreo de amenazas',
      'Gestión de parches',
    ],
    correctAnswer: 'Control de accesos',
  },
  {
    question: '¿Qué servicio de AWS proporciona recomendaciones para optimizar costos y rendimiento?',
    options: [
      'AWS Well-Architected Tool',
      'AWS Trusted Advisor',
      'AWS Cost Explorer',
      'AWS Budgets',
    ],
    correctAnswer: 'AWS Trusted Advisor',
  },
  {
    question: '¿Qué concepto clave en la optimización de almacenamiento reduce el tamaño de los archivos?',
    options: [
      'Compresión y deduplicación',
      'Clases de almacenamiento',
      'Eliminación de datos inactivos',
      'Escalabilidad automática',
    ],
    correctAnswer: 'Compresión y deduplicación',
  },
  {
    question: '¿Qué servicio de AWS permite conectar eventos entre aplicaciones y servicios AWS?',
    options: [
      'Amazon API Gateway',
      'Amazon EventBridge',
      'AWS Step Functions',
      'AWS Direct Connect',
    ],
    correctAnswer: 'Amazon EventBridge',
  },
  {
    question: '¿Qué estrategia de fiabilidad redirige el tráfico a un servidor de respaldo en caso de fallo?',
    options: [
      'Conmutación por error',
      'Escalabilidad automática',
      'Balanceo de carga',
      'Redundancia',
    ],
    correctAnswer: 'Conmutación por error',
  },
  {
    question: '¿Qué servicio de AWS facilita la administración de configuraciones de servidores?',
    options: [
      'AWS OpsWorks',
      'AWS Lambda',
      'AWS Step Functions',
      'AWS CloudFormation',
    ],
    correctAnswer: 'AWS OpsWorks',
  },
  {
    question: '¿Qué concepto clave en la eficiencia de redes reduce la distancia entre servidores y usuarios?',
    options: [
      'Ubicación geográfica de los servidores',
      'Optimización de tráfico',
      'Uso de redes privadas',
      'Escalabilidad horizontal',
    ],
    correctAnswer: 'Ubicación geográfica de los servidores',
  },
  {
    question: '¿Qué servicio de AWS supervisa cambios en la configuración de la infraestructura?',
    options: [
      'Amazon CloudWatch',
      'AWS Config',
      'AWS CloudTrail',
      'AWS Trusted Advisor',
    ],
    correctAnswer: 'AWS Config',
  },
  {
    question: '¿Qué pilar del Well-Architected Framework protege la información y los sistemas en la nube?',
    options: [
      'Excelencia operacional',
      'Seguridad',
      'Fiabilidad',
      'Optimización de costos',
    ],
    correctAnswer: 'Seguridad',
  },
  {
    question: '¿Qué servicio de AWS protege datos con cifrado en reposo y en tránsito?',
    options: [
      'AWS IAM',
      'AWS KMS',
      'Amazon GuardDuty',
      'AWS Shield',
    ],
    correctAnswer: 'AWS KMS',
  },
  {
    question: '¿Qué estrategia de optimización de costos utiliza contenedores para ejecutar múltiples aplicaciones?',
    options: [
      'Uso eficiente de contenedores',
      'Escalabilidad automática',
      'Compresión de datos',
      'Análisis de facturación',
    ],
    correctAnswer: 'Uso eficiente de contenedores',
  },
  {
    question: '¿Qué servicio de AWS ejecuta contenedores sin administrar servidores?',
    options: [
      'Amazon ECS',
      'AWS Fargate',
      'Amazon EKS',
      'AWS Lambda',
    ],
    correctAnswer: 'AWS Fargate',
  },
  {
    question: '¿Qué práctica de seguridad en la nube realiza copias de seguridad periódicas?',
    options: [
      'Control de accesos',
      'Cifrado de datos',
      'Copias de seguridad y recuperación',
      'Monitoreo de amenazas',
    ],
    correctAnswer: 'Copias de seguridad y recuperación',
  },
  {
    question: '¿Qué servicio de AWS proporciona patrones arquitectónicos y guías de diseño?',
    options: [
      'AWS Well-Architected Tool',
      'AWS Architecture Center',
      'AWS Pricing Calculator',
      'AWS CloudFormation',
    ],
    correctAnswer: 'AWS Architecture Center',
  },
  {
    question: '¿Qué concepto clave en la eficiencia de rendimiento utiliza almacenamiento en caché?',
    options: [
      'Indexación de bases de datos',
      'Almacenamiento en caché',
      'Optimización de tráfico',
      'Escalabilidad vertical',
    ],
    correctAnswer: 'Almacenamiento en caché',
  },
  {
    question: '¿Qué servicio de AWS permite la automatización de la infraestructura como código?',
    options: [
      'AWS Lambda',
      'AWS CloudFormation',
      'Amazon S3',
      'Amazon RDS',
    ],
    correctAnswer: 'AWS CloudFormation',
  },
  {
    question: '¿Qué principio del Well-Architected Framework se refiere a la capacidad de ejecutar y monitorear sistemas de manera eficiente?',
    options: [
      'Seguridad',
      'Excelencia Operacional',
      'Fiabilidad',
      'Sostenibilidad',
    ],
    correctAnswer: 'Excelencia Operacional',
  },
  {
    question: '¿Qué servicio de AWS se utiliza para monitorear el rendimiento de los servicios en la nube?',
    options: [
      'AWS CloudTrail',
      'AWS CloudWatch',
      'AWS Config',
      'AWS Trusted Advisor',
    ],
    correctAnswer: 'AWS CloudWatch',
  },
  {
    question: '¿Qué modelo de seguridad se aplica en la nube?',
    options: [
      'Responsabilidad única',
      'Responsabilidad compartida',
      'Responsabilidad del cliente',
      'Responsabilidad del proveedor',
    ],
    correctAnswer: 'Responsabilidad compartida',
  },
  {
    question: '¿Qué servicio de AWS ayuda a detectar amenazas en la nube?',
    options: [
      'AWS Shield',
      'AWS GuardDuty',
      'AWS KMS',
      'AWS IAM',
    ],
    correctAnswer: 'AWS GuardDuty',
  },
  {
    question: '¿Qué característica tiene un sistema fiable y altamente disponible en la nube?',
    options: [
      'Redundancia',
      'Escalabilidad vertical',
      'Modelo de consistencia eventual',
      'Uso del lenguaje SQL',
    ],
    correctAnswer: 'Redundancia',
  },
  {
    question: '¿Qué servicio de AWS permite la replicación de datos en múltiples regiones?',
    options: [
      'Amazon S3 Cross-Region Replication',
      'Amazon RDS Multi-AZ',
      'AWS CloudFront',
      'AWS Lambda',
    ],
    correctAnswer: 'Amazon S3 Cross-Region Replication',
  },
  {
    question: '¿Qué servicio de AWS se utiliza para distribuir el tráfico entre múltiples servidores?',
    options: [
      'Elastic Load Balancing',
      'AWS Auto Scaling',
      'Amazon CloudFront',
      'AWS Lambda',
    ],
    correctAnswer: 'Elastic Load Balancing',
  },
  {
    question: '¿Qué servicio de AWS permite ejecutar código sin necesidad de gestionar servidores?',
    options: [
      'AWS Lambda',
      'Amazon EC2',
      'AWS CloudFormation',
      'Amazon RDS',
    ],
    correctAnswer: 'AWS Lambda',
  },
  {
    question: '¿Qué servicio de AWS proporciona una conexión privada de alta velocidad entre la empresa y AWS?',
    options: [
      'AWS Direct Connect',
      'Amazon VPC',
      'AWS CloudFront',
      'AWS Lambda',
    ],
    correctAnswer: 'AWS Direct Connect',
  },
  {
    question: '¿Qué servicio de AWS ayuda a optimizar costos en la nube?',
    options: [
      'AWS Cost Explorer',
      'AWS CloudTrail',
      'AWS CloudWatch',
      'AWS Trusted Advisor',
    ],
    correctAnswer: 'AWS Cost Explorer',
  },
  {
    question: '¿Qué servicio de AWS permite definir infraestructura con archivos de configuración en JSON o YAML?',
    options: [
      'AWS CloudFormation',
      'AWS Lambda',
      'Amazon S3',
      'Amazon RDS',
    ],
    correctAnswer: 'AWS CloudFormation',
  },
  {
    question: '¿Qué servicio de AWS permite orquestar procesos automatizados en la nube?',
    options: [
      'AWS Step Functions',
      'AWS CloudFormation',
      'AWS Lambda',
      'Amazon RDS',
    ],
    correctAnswer: 'AWS Step Functions',
  },
  {
    question: '¿Qué servicio de AWS facilita la creación y gestión de APIs?',
    options: [
      'Amazon API Gateway',
      'AWS CloudFront',
      'AWS Lambda',
      'Amazon RDS',
    ],
    correctAnswer: 'Amazon API Gateway',
  },
  {
    question: '¿Qué servicio de AWS permite conectar eventos entre aplicaciones y servicios?',
    options: [
      'Amazon EventBridge',
      'AWS CloudTrail',
      'AWS CloudWatch',
      'AWS Trusted Advisor',
    ],
    correctAnswer: 'Amazon EventBridge',
  },
  {
    question: '¿Qué servicio de AWS proporciona recomendaciones para mejorar arquitecturas en la nube?',
    options: [
      'AWS Well-Architected Tool',
      'AWS CloudFormation',
      'AWS Lambda',
      'Amazon RDS',
    ],
    correctAnswer: 'AWS Well-Architected Tool',
  },
  {
    question: '¿Qué servicio de AWS permite la gestión de usuarios y control de accesos?',
    options: [
      'AWS IAM',
      'AWS KMS',
      'AWS Shield',
      'AWS GuardDuty',
    ],
    correctAnswer: 'AWS IAM',
  },
  {
    question: '¿Qué servicio de AWS proporciona almacenamiento en caché para reducir la latencia en la recuperación de datos?',
    options: [
      'Amazon ElastiCache',
      'Amazon S3',
      'Amazon RDS',
      'AWS Lambda',
    ],
    correctAnswer: 'Amazon ElastiCache',
  },
  {
    question: '¿Qué servicio de AWS permite almacenar datos en diferentes niveles de acceso?',
    options: [
      'Amazon S3 Intelligent-Tiering',
      'Amazon S3 Glacier',
      'Amazon EBS',
      'Amazon RDS',
    ],
    correctAnswer: 'Amazon S3 Intelligent-Tiering',
  },
  {
    question: '¿Qué servicio de AWS permite la automatización de copias de seguridad de datos y aplicaciones?',
    options: [
      'AWS Backup',
      'AWS CloudTrail',
      'AWS CloudWatch',
      'AWS Trusted Advisor',
    ],
    correctAnswer: 'AWS Backup',
  },
  {
    question: '¿Qué servicio de AWS permite la creación de alertas de gasto para evitar sobrecostos?',
    options: [
      'AWS Budgets',
      'AWS CloudTrail',
      'AWS CloudWatch',
      'AWS Trusted Advisor',
    ],
    correctAnswer: 'AWS Budgets',
  },
  {
    question: '¿Qué servicio de AWS permite la revisión de arquitecturas en la nube basándose en principios de diseño recomendados?',
    options: [
      'AWS Well-Architected Tool',
      'AWS CloudFormation',
      'AWS Lambda',
      'Amazon RDS',
    ],
    correctAnswer: 'AWS Well-Architected Tool',
  },
  {
    question: '¿Qué servicio de AWS permite la gestión de claves de seguridad?',
    options: [
      'AWS KMS',
      'AWS IAM',
      'AWS Shield',
      'AWS GuardDuty',
    ],
    correctAnswer: 'AWS KMS',
  },
  {
    question: '¿Qué servicio de AWS permite la protección contra ataques DDoS?',
    options: [
      'AWS Shield',
      'AWS IAM',
      'AWS KMS',
      'AWS GuardDuty',
    ],
    correctAnswer: 'AWS Shield',
  },
  {
    question: '¿Qué servicio de AWS permite la detección de amenazas en la nube?',
    options: [
      'AWS GuardDuty',
      'AWS IAM',
      'AWS KMS',
      'AWS Shield',
    ],
    correctAnswer: 'AWS GuardDuty',
  },
  {
    question: '¿Qué servicio de AWS permite la gestión de claves de seguridad?',
    options: [
      'AWS KMS',
      'AWS IAM',
      'AWS Shield',
      'AWS GuardDuty',
    ],
    correctAnswer: 'AWS KMS',
  },
  {
    question: '¿Qué servicio de AWS permite la protección contra ataques DDoS?',
    options: [
      'AWS Shield',
      'AWS IAM',
      'AWS KMS',
      'AWS GuardDuty',
    ],
    correctAnswer: 'AWS Shield',
  },
  {
    question: '¿Qué servicio de AWS permite la detección de amenazas en la nube?',
    options: [
      'AWS GuardDuty',
      'AWS IAM',
      'AWS KMS',
      'AWS Shield',
    ],
    correctAnswer: 'AWS GuardDuty',
  },
  {
    question: '¿Qué servicio de AWS permite la gestión de claves de seguridad?',
    options: [
      'AWS KMS',
      'AWS IAM',
      'AWS Shield',
      'AWS GuardDuty',
    ],
    correctAnswer: 'AWS KMS',
  },
  {
    question: '¿Qué servicio de AWS permite la protección contra ataques DDoS?',
    options: [
      'AWS Shield',
      'AWS IAM',
      'AWS KMS',
      'AWS GuardDuty',
    ],
    correctAnswer: 'AWS Shield',
  },
  {
    question: '¿Qué servicio de AWS permite la detección de amenazas en la nube?',
    options: [
      'AWS GuardDuty',
      'AWS IAM',
      'AWS KMS',
      'AWS Shield',
    ],
    correctAnswer: 'AWS GuardDuty',
  },
  {
    question: '¿Qué servicio de AWS proporciona almacenamiento de bajo costo para archivos de acceso infrecuente?',
    options: [
      'Amazon S3 Glacier',
      'Amazon S3 Standard',
      'Amazon EBS',
      'Amazon RDS',
    ],
    correctAnswer: 'Amazon S3 Glacier',
  },
]