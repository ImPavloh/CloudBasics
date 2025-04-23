import { Question } from '../types'

export const arquitectura: Question[] = [
  {
    question: '¿Cuál es una característica clave de la arquitectura en la nube?',
    options: [
      'Escalabilidad',
      'Necesidad de mantenimiento de hardware',
      'Menor accesibilidad remota',
      'Mayor complejidad de gestión',
    ],
    correctAnswer: 'Escalabilidad',
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