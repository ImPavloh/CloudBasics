import { Question } from '../types'

export const servicios: Question[] = [
  {
    question: 'Infraestructura como Servicio (SaaS):',
    options: [
      'Entrega de recursos informáticos bajo demanda a través de Internet. En lugar de depender de servidores físicos locales, los usuarios pueden acceder a servicios alojados en centros de datos remotos administrados por proveedores de nube.',
      'Modelo que proporciona entornos de desarrollo preconfigurados que incluyen sistemas operativos, bases de datos, herramientas de desarrollo y middleware. Los desarrolladores pueden centrarse en la creación de software sin preocuparse por la infraestructura subyacente.',
      'Modelo en el que los proveedores de la nube ofrecen recursos de infraestructura virtualizados, como servidores, almacenamiento y redes, a través de Internet. Los usuarios tienen control sobre la configuración y administración de estos recursos, pero no sobre el hardware físico.',
      'Modelo que permite a los usuarios acceder a aplicaciones completamente gestionadas a través de Internet. No requieren instalación ni mantenimiento, ya que el proveedor se encarga de su administración.',
    ],
    correctAnswer: 'Modelo que permite a los usuarios acceder a aplicaciones completamente gestionadas a través de Internet. No requieren instalación ni mantenimiento, ya que el proveedor se encarga de su administración.',
  },
  {
    question: 'Microservicios:',
    options: [
      'Proceso de automatizar la implementación, escalado, administración y networking de contenedores en un entorno de producción. Dado que una aplicación moderna puede estar compuesta por múltiples contenedores, se requiere una solución de orquestación para garantizar la alta disponibilidad y la eficiencia operativa.',
      'Unidad estándar de software que empaqueta código y todas sus dependencias para que una aplicación se ejecute de manera rápida y confiable en cualquier entorno.',
      'Conjunto de servidores que trabajan juntos para ejecutar y gestionar contenedores de manera eficiente. Los proveedores de servicios en la nube ofrecen soluciones administradas que automatizan la orquestación, el escalado y la gestión de estos contenedores.',
      'Arquitectura en la que una aplicación se divide en múltiples servicios independientes que pueden desarrollarse, implementarse y escalarse de manera autónoma.',
      'Proceso mediante el cual se buscan estrategias para reducir el gasto en recursos computacionales sin comprometer el rendimiento, la seguridad o la disponibilidad de los servicios en la nube.',
    ],
    correctAnswer: 'Arquitectura en la que una aplicación se divide en múltiples servicios independientes que pueden desarrollarse, implementarse y escalarse de manera autónoma.',
  },
  {
    question: 'Kubernetes:',
    options: [
      'Plataforma de orquestación de contenedores más utilizada en la actualidad. Permite la gestión automatizada de contenedores a través de un clúster de servidores. Facilita la escalabilidad automática, la recuperación ante fallos y la distribución eficiente de recursos.',
      'Ninguna opción es correcta.',
      'Plataforma líder en la creación y gestión de contenedores. Permite a los desarrolladores empaquetar aplicaciones en imágenes portables que pueden ejecutarse en cualquier sistema compatible con Docker.',
      'Modelo en el que los proveedores de la nube ofrecen recursos de infraestructura virtualizados, como servidores, almacenamiento y redes, a través de Internet. Los usuarios tienen control sobre la configuración y administración de estos recursos, pero no sobre el hardware físico.',
      'Plataformas en la nube que permiten el alojamiento, escalado y mantenimiento automático de aplicaciones sin que el usuario tenga que gestionar la infraestructura subyacente. Estos servicios proporcionan entornos de ejecución optimizados y herramientas para facilitar el desarrollo, la seguridad y la disponibilidad de las aplicaciones.',
    ],
    correctAnswer: 'Plataforma de orquestación de contenedores más utilizada en la actualidad. Permite la gestión automatizada de contenedores a través de un clúster de servidores. Facilita la escalabilidad automática, la recuperación ante fallos y la distribución eficiente de recursos.',
  },
  {
    question: 'El hipervisor que se ejecuta sobre un sistema operativo existente, como cualquier otra aplicación, se denomina:',
    options: [
      'Hipervisor de tipo 4.',
      'Hipervisor de tipo 2.',
      'Hipervisor de tipo 5.',
      'Hipervisor de tipo 3.',
      'Hipervisor de tipo 1.',
    ],
    correctAnswer: 'Hipervisor de tipo 2.',
  },
  {
    question: 'Cómputo en la nube:',
    options: [
      'Modelo en el que los proveedores de la nube ofrecen recursos de infraestructura virtualizados, como servidores, almacenamiento y redes, a través de Internet. Los usuarios tienen control sobre la configuración y administración de estos recursos, pero no sobre el hardware físico.',
      'Modelo que proporciona entornos de desarrollo preconfigurados que incluyen sistemas operativos, bases de datos, herramientas de desarrollo y middleware. Los desarrolladores pueden centrarse en la creación de software sin preocuparse por la infraestructura subyacente.',
      'Modelo que permite a los usuarios acceder a aplicaciones completamente gestionadas a través de Internet. No requieren instalación ni mantenimiento, ya que el proveedor se encarga de su administración.',
      'Modelo de desarrollo y ejecución de aplicaciones en el que el proveedor de servicios en la nube gestiona la infraestructura de servidores y asigna recursos automáticamente. A pesar de su nombre, no significa que no se usen servidores, sino que estos son gestionados por el proveedor de la nube.',
      'Entrega de recursos informáticos bajo demanda a través de Internet. En lugar de depender de servidores físicos locales, los usuarios pueden acceder a servicios alojados en centros de datos remotos administrados por proveedores de nube.',
    ],
    correctAnswer: 'Entrega de recursos informáticos bajo demanda a través de Internet. En lugar de depender de servidores físicos locales, los usuarios pueden acceder a servicios alojados en centros de datos remotos administrados por proveedores de nube.',
  },
  {
    question: 'Elasticidad:',
    options: [
      'Capacidad de los servicios en la nube para interactuar con diferentes sistemas y aplicaciones.',
      'Habilidad de un sistema para aumentar su capacidad de procesamiento de manera controlada y sostenida.',
      'Tecnología clave en la computación en la nube que permite crear múltiples entornos de cómputo dentro de un mismo hardware físico.',
      'Capacidad de un sistema para aumentar o reducir automáticamente los recursos de cómputo en función de la demanda.',
      'Permite migrar servicios entre distintos proveedores sin grandes complicaciones.',
    ],
    correctAnswer: 'Capacidad de un sistema para aumentar o reducir automáticamente los recursos de cómputo en función de la demanda.',
  },
  {
    question: 'Contenedor:',
    options: [
      'Conjunto de servidores que trabajan juntos para ejecutar y gestionar contenedores de manera eficiente. Los proveedores de servicios en la nube ofrecen soluciones administradas que automatizan la orquestación, el escalado y la gestión de estos contenedores.',
      'Proceso mediante el cual se buscan estrategias para reducir el gasto en recursos computacionales sin comprometer el rendimiento, la seguridad o la disponibilidad de los servicios en la nube.',
      'Unidad estándar de software que empaqueta código y todas sus dependencias para que una aplicación se ejecute de manera rápida y confiable en cualquier entorno.',
      'Proceso de automatizar la implementación, escalado, administración y networking de contenedores en un entorno de producción. Dado que una aplicación moderna puede estar compuesta por múltiples contenedores, se requiere una solución de orquestación para garantizar la alta disponibilidad y la eficiencia operativa.',
      'Arquitectura en la que una aplicación se divide en múltiples servicios independientes que pueden desarrollarse, implementarse y escalarse de manera autónoma.',
    ],
    correctAnswer: 'Unidad estándar de software que empaqueta código y todas sus dependencias para que una aplicación se ejecute de manera rápida y confiable en cualquier entorno.',
  },
  {
    question: 'Clúster de servicios administrados de contenedores:',
    options: [
      'Proceso de automatizar la implementación, escalado, administración y networking de contenedores en un entorno de producción. Dado que una aplicación moderna puede estar compuesta por múltiples contenedores, se requiere una solución de orquestación para garantizar la alta disponibilidad y la eficiencia operativa.',
      'Arquitectura en la que una aplicación se divide en múltiples servicios independientes que pueden desarrollarse, implementarse y escalarse de manera autónoma.',
      'Unidad estándar de software que empaqueta código y todas sus dependencias para que una aplicación se ejecute de manera rápida y confiable en cualquier entorno.',
      'Proceso mediante el cual se buscan estrategias para reducir el gasto en recursos computacionales sin comprometer el rendimiento, la seguridad o la disponibilidad de los servicios en la nube.',
      'Conjunto de servidores que trabajan juntos para ejecutar y gestionar contenedores de manera eficiente. Los proveedores de servicios en la nube ofrecen soluciones administradas que automatizan la orquestación, el escalado y la gestión de estos contenedores.',
    ],
    correctAnswer: 'Conjunto de servidores que trabajan juntos para ejecutar y gestionar contenedores de manera eficiente. Los proveedores de servicios en la nube ofrecen soluciones administradas que automatizan la orquestación, el escalado y la gestión de estos contenedores.',
  },
  {
    question: 'Máquinas virtuales:',
    options: [
      'Modelo de computación sin servidor en el que los desarrolladores ejecutan funciones independientes en respuesta a eventos específicos, pagando solo por la ejecución.',
      'Instancias de software que emulan el hardware de un sistema informático, que se ejecuta sobre una infraestructura virtualizada en un entorno de nube, proporcionando la capacidad de ejecutar aplicaciones y servicios de forma similar a un servidor físico, pero con mayor flexibilidad y escalabilidad.',
      'Modelo basado en contenedores permiten empaquetar aplicaciones con todas sus dependencias en entornos portables y ligeros. CaaS proporciona una plataforma administrada para ejecutar y escalar contenedores sin gestionar la infraestructura subyacente.',
      'Plataformas en la nube que permiten el alojamiento, escalado y mantenimiento automático de aplicaciones sin que el usuario tenga que gestionar la infraestructura subyacente. Estos servicios proporcionan entornos de ejecución optimizados y herramientas para facilitar el desarrollo, la seguridad y la disponibilidad de las aplicaciones.',
      'Ninguna opción es correcta.',
    ],
    correctAnswer: 'Instancias de software que emulan el hardware de un sistema informático, que se ejecuta sobre una infraestructura virtualizada en un entorno de nube, proporcionando la capacidad de ejecutar aplicaciones y servicios de forma similar a un servidor físico, pero con mayor flexibilidad y escalabilidad.',
  },
  {
    question: 'Optimización de costes en máquinas virtuales:',
    options: [
      'Unidad estándar de software que empaqueta código y todas sus dependencias para que una aplicación se ejecute de manera rápida y confiable en cualquier entorno.',
      'Arquitectura en la que una aplicación se divide en múltiples servicios independientes que pueden desarrollarse, implementarse y escalarse de manera autónoma.',
      'Conjunto de servidores que trabajan juntos para ejecutar y gestionar contenedores de manera eficiente. Los proveedores de servicios en la nube ofrecen soluciones administradas que automatizan la orquestación, el escalado y la gestión de estos contenedores.',
      'Proceso de automatizar la implementación, escalado, administración y networking de contenedores en un entorno de producción. Dado que una aplicación moderna puede estar compuesta por múltiples contenedores, se requiere una solución de orquestación para garantizar la alta disponibilidad y la eficiencia operativa.',
      'Proceso mediante el cual se buscan estrategias para reducir el gasto en recursos computacionales sin comprometer el rendimiento, la seguridad o la disponibilidad de los servicios en la nube.',
    ],
    correctAnswer: 'Proceso mediante el cual se buscan estrategias para reducir el gasto en recursos computacionales sin comprometer el rendimiento, la seguridad o la disponibilidad de los servicios en la nube.',
  },
  {
    question: 'Portabilidad:',
    options: [
      'Permite migrar servicios entre distintos proveedores sin grandes complicaciones.',
      'Capacidad de un sistema para aumentar o reducir automáticamente los recursos de cómputo en función de la demanda.',
      'Tecnología clave en la computación en la nube que permite crear múltiples entornos de cómputo dentro de un mismo hardware físico.',
      'Capacidad de los servicios en la nube para interactuar con diferentes sistemas y aplicaciones.',
      'Habilidad de un sistema para aumentar su capacidad de procesamiento de manera controlada y sostenida.',
    ],
    correctAnswer: 'Permite migrar servicios entre distintos proveedores sin grandes complicaciones.',
  },
  {
    question: 'Contenedores como Servicio (CaaS):',
    options: [
      'Modelo basado en contenedores permiten empaquetar aplicaciones con todas sus dependencias en entornos portables y ligeros. CaaS proporciona una plataforma administrada para ejecutar y escalar contenedores sin gestionar la infraestructura subyacente.',
      'Modelo de computación sin servidor en el que los desarrolladores ejecutan funciones independientes en respuesta a eventos específicos, pagando solo por la ejecución.',
      'Plataformas en la nube que permiten el alojamiento, escalado y mantenimiento automático de aplicaciones sin que el usuario tenga que gestionar la infraestructura subyacente. Estos servicios proporcionan entornos de ejecución optimizados y herramientas para facilitar el desarrollo, la seguridad y la disponibilidad de las aplicaciones.',
      'Instancias de software que emulan el hardware de un sistema informático, que se ejecuta sobre una infraestructura virtualizada en un entorno de nube, proporcionando la capacidad de ejecutar aplicaciones y servicios de forma similar a un servidor físico, pero con mayor flexibilidad y escalabilidad.',
      'Ninguna opción es correcta.',
    ],
    correctAnswer: 'Modelo basado en contenedores permiten empaquetar aplicaciones con todas sus dependencias en entornos portables y ligeros. CaaS proporciona una plataforma administrada para ejecutar y escalar contenedores sin gestionar la infraestructura subyacente.',
  },
  {
    question: 'Docker:',
    options: [
      'Modelo en el que los proveedores de la nube ofrecen recursos de infraestructura virtualizados, como servidores, almacenamiento y redes, a través de Internet. Los usuarios tienen control sobre la configuración y administración de estos recursos, pero no sobre el hardware físico.',
      'Plataforma líder en la creación y gestión de contenedores. Permite a los desarrolladores empaquetar aplicaciones en imágenes portables que pueden ejecutarse en cualquier sistema compatible con Docker.',
      'Ninguna opción es correcta.',
      'Plataformas en la nube que permiten el alojamiento, escalado y mantenimiento automático de aplicaciones sin que el usuario tenga que gestionar la infraestructura subyacente. Estos servicios proporcionan entornos de ejecución optimizados y herramientas para facilitar el desarrollo, la seguridad y la disponibilidad de las aplicaciones.',
      'Plataforma de orquestación de contenedores más utilizada en la actualidad. Permite la gestión automatizada de contenedores a través de un clúster de servidores. Facilita la escalabilidad automática, la recuperación ante fallos y la distribución eficiente de recursos.',
    ],
    correctAnswer: 'Plataforma líder en la creación y gestión de contenedores. Permite a los desarrolladores empaquetar aplicaciones en imágenes portables que pueden ejecutarse en cualquier sistema compatible con Docker.',
  },
  {
    question: 'Pago por Uso (Pay-as-you-go):',
    options: [
      'Habilidad de un sistema para aumentar su capacidad de procesamiento de manera controlada y sostenida.',
      'Implica que los usuarios solo pagan por los recursos que consumen, eliminando la necesidad de inversiones iniciales en infraestructura.',
      'Capacidad de los servicios en la nube para interactuar con diferentes sistemas y aplicaciones.',
      'Tecnología clave en la computación en la nube que permite crear múltiples entornos de cómputo dentro de un mismo hardware físico.',
      'Capacidad de un sistema para aumentar o reducir automáticamente los recursos de cómputo en función de la demanda.',
    ],
    correctAnswer: 'Implica que los usuarios solo pagan por los recursos que consumen, eliminando la necesidad de inversiones iniciales en infraestructura.',
  },
  {
    question: 'Orquestación de contenedores:',
    options: [
      'Unidad estándar de software que empaqueta código y todas sus dependencias para que una aplicación se ejecute de manera rápida y confiable en cualquier entorno.',
      'Arquitectura en la que una aplicación se divide en múltiples servicios independientes que pueden desarrollarse, implementarse y escalarse de manera autónoma.',
      'Proceso mediante el cual se buscan estrategias para reducir el gasto en recursos computacionales sin comprometer el rendimiento, la seguridad o la disponibilidad de los servicios en la nube.',
      'Conjunto de servidores que trabajan juntos para ejecutar y gestionar contenedores de manera eficiente. Los proveedores de servicios en la nube ofrecen soluciones administradas que automatizan la orquestación, el escalado y la gestión de estos contenedores.',
      'Proceso de automatizar la implementación, escalado, administración y networking de contenedores en un entorno de producción. Dado que una aplicación moderna puede estar compuesta por múltiples contenedores, se requiere una solución de orquestación para garantizar la alta disponibilidad y la eficiencia operativa.',
    ],
    correctAnswer: 'Proceso de automatizar la implementación, escalado, administración y networking de contenedores en un entorno de producción. Dado que una aplicación moderna puede estar compuesta por múltiples contenedores, se requiere una solución de orquestación para garantizar la alta disponibilidad y la eficiencia operativa.',
  },
  {
    question: 'Virtualización:',
    options: [
      'Tecnología clave en la computación en la nube que permite crear múltiples entornos de cómputo dentro de un mismo hardware físico.',
      'Permite migrar servicios entre distintos proveedores sin grandes complicaciones.',
      'Habilidad de un sistema para aumentar su capacidad de procesamiento de manera controlada y sostenida.',
      'Capacidad de un sistema para aumentar o reducir automáticamente los recursos de cómputo en función de la demanda.',
      'Capacidad de los servicios en la nube para interactuar con diferentes sistemas y aplicaciones.',
    ],
    correctAnswer: 'Tecnología clave en la computación en la nube que permite crear múltiples entornos de cómputo dentro de un mismo hardware físico.',
  },
  {
    question: 'Computación sin servidor:',
    options: [
      'Modelo de desarrollo y ejecución de aplicaciones en el que el proveedor de servicios en la nube gestiona la infraestructura de servidores y asigna recursos automáticamente. A pesar de su nombre, no significa que no se usen servidores, sino que estos son gestionados por el proveedor de la nube.',
      'Modelo que permite a los usuarios acceder a aplicaciones completamente gestionadas a través de Internet. No requieren instalación ni mantenimiento, ya que el proveedor se encarga de su administración.',
      'Modelo en el que los proveedores de la nube ofrecen recursos de infraestructura virtualizados, como servidores, almacenamiento y redes, a través de Internet. Los usuarios tienen control sobre la configuración y administración de estos recursos, pero no sobre el hardware físico.',
      'Modelo que proporciona entornos de desarrollo preconfigurados que incluyen sistemas operativos, bases de datos, herramientas de desarrollo y middleware. Los desarrolladores pueden centrarse en la creación de software sin preocuparse por la infraestructura subyacente.',
      'Entrega de recursos informáticos bajo demanda a través de Internet. En lugar de depender de servidores físicos locales, los usuarios pueden acceder a servicios alojados en centros de datos remotos administrados por proveedores de nube.',
    ],
    correctAnswer: 'Modelo de desarrollo y ejecución de aplicaciones en el que el proveedor de servicios en la nube gestiona la infraestructura de servidores y asigna recursos automáticamente. A pesar de su nombre, no significa que no se usen servidores, sino que estos son gestionados por el proveedor de la nube.',
  },
  {
    question: 'Servicios administrados de despliegue de aplicaciones Web:',
    options: [
      'Modelo basado en contenedores permiten empaquetar aplicaciones con todas sus dependencias en entornos portables y ligeros. CaaS proporciona una plataforma administrada para ejecutar y escalar contenedores sin gestionar la infraestructura subyacente.',
      'Instancias de software que emulan el hardware de un sistema informático, que se ejecuta sobre una infraestructura virtualizada en un entorno de nube, proporcionando la capacidad de ejecutar aplicaciones y servicios de forma similar a un servidor físico, pero con mayor flexibilidad y escalabilidad.',
      'Plataformas en la nube que permiten el alojamiento, escalado y mantenimiento automático de aplicaciones sin que el usuario tenga que gestionar la infraestructura subyacente. Estos servicios proporcionan entornos de ejecución optimizados y herramientas para facilitar el desarrollo, la seguridad y la disponibilidad de las aplicaciones.',
      'Modelo de computación sin servidor en el que los desarrolladores ejecutan funciones independientes en respuesta a eventos específicos, pagando solo por la ejecución.',
      'Ninguna opción es correcta.',
    ],
    correctAnswer: 'Plataformas en la nube que permiten el alojamiento, escalado y mantenimiento automático de aplicaciones sin que el usuario tenga que gestionar la infraestructura subyacente. Estos servicios proporcionan entornos de ejecución optimizados y herramientas para facilitar el desarrollo, la seguridad y la disponibilidad de las aplicaciones.',
  },
  {
    question: 'Funciones como Servicio (FaaS):',
    options: [
      'Plataformas en la nube que permiten el alojamiento, escalado y mantenimiento automático de aplicaciones sin que el usuario tenga que gestionar la infraestructura subyacente. Estos servicios proporcionan entornos de ejecución optimizados y herramientas para facilitar el desarrollo, la seguridad y la disponibilidad de las aplicaciones.',
      'Modelo basado en contenedores permiten empaquetar aplicaciones con todas sus dependencias en entornos portables y ligeros. CaaS proporciona una plataforma administrada para ejecutar y escalar contenedores sin gestionar la infraestructura subyacente.',
      'Instancias de software que emulan el hardware de un sistema informático, que se ejecuta sobre una infraestructura virtualizada en un entorno de nube, proporcionando la capacidad de ejecutar aplicaciones y servicios de forma similar a un servidor físico, pero con mayor flexibilidad y escalabilidad.',
      'Modelo de computación sin servidor en el que los desarrolladores ejecutan funciones independientes en respuesta a eventos específicos, pagando solo por la ejecución.',
      'Ninguna opción es correcta.',
    ],
    correctAnswer: 'Modelo de computación sin servidor en el que los desarrolladores ejecutan funciones independientes en respuesta a eventos específicos, pagando solo por la ejecución.',
  },
  {
    question: 'Interoperabilidad:',
    options: [
      'Permite migrar servicios entre distintos proveedores sin grandes complicaciones.',
      'Tecnología clave en la computación en la nube que permite crear múltiples entornos de cómputo dentro de un mismo hardware físico.',
      'Capacidad de los servicios en la nube para interactuar con diferentes sistemas y aplicaciones.',
      'Habilidad de un sistema para aumentar su capacidad de procesamiento de manera controlada y sostenida.',
      'Capacidad de un sistema para aumentar o reducir automáticamente los recursos de cómputo en función de la demanda.',
    ],
    correctAnswer: 'Capacidad de los servicios en la nube para interactuar con diferentes sistemas y aplicaciones.',
  },
  {
    question: 'Escalabilidad:',
    options: [
      'Tecnología clave en la computación en la nube que permite crear múltiples entornos de cómputo dentro de un mismo hardware físico.',
      'Habilidad de un sistema para aumentar su capacidad de procesamiento de manera controlada y sostenida.',
      'Capacidad de un sistema para aumentar o reducir automáticamente los recursos de cómputo en función de la demanda.',
      'Permite migrar servicios entre distintos proveedores sin grandes complicaciones.',
      'Capacidad de los servicios en la nube para interactuar con diferentes sistemas y aplicaciones.',
    ],
    correctAnswer: 'Habilidad de un sistema para aumentar su capacidad de procesamiento de manera controlada y sostenida.',
  },
  {
    question: 'Infraestructura como Servicio (PaaS):',
    options: [
      'Modelo en el que los proveedores de la nube ofrecen recursos de infraestructura virtualizados, como servidores, almacenamiento y redes, a través de Internet. Los usuarios tienen control sobre la configuración y administración de estos recursos, pero no sobre el hardware físico.',
      'Entrega de recursos informáticos bajo demanda a través de Internet. En lugar de depender de servidores físicos locales, los usuarios pueden acceder a servicios alojados en centros de datos remotos administrados por proveedores de nube.',
      'Modelo que proporciona entornos de desarrollo preconfigurados que incluyen sistemas operativos, bases de datos, herramientas de desarrollo y middleware. Los desarrolladores pueden centrarse en la creación de software sin preocuparse por la infraestructura subyacente.',
      'Modelo de desarrollo y ejecución de aplicaciones en el que el proveedor de servicios en la nube gestiona la infraestructura de servidores y asigna recursos automáticamente. A pesar de su nombre, no significa que no se usen servidores, sino que estos son gestionados por el proveedor de la nube.',
      'Modelo que permite a los usuarios acceder a aplicaciones completamente gestionadas a través de Internet. No requieren instalación ni mantenimiento, ya que el proveedor se encarga de su administración.',
    ],
    correctAnswer: 'Modelo que proporciona entornos de desarrollo preconfigurados que incluyen sistemas operativos, bases de datos, herramientas de desarrollo y middleware. Los desarrolladores pueden centrarse en la creación de software sin preocuparse por la infraestructura subyacente.',
  },
  {
    question: 'Infraestructura como Servicio (IaaS):',
    options: [
      'Modelo de desarrollo y ejecución de aplicaciones en el que el proveedor de servicios en la nube gestiona la infraestructura de servidores y asigna recursos automáticamente. A pesar de su nombre, no significa que no se usen servidores, sino que estos son gestionados por el proveedor de la nube.',
      'Modelo que proporciona entornos de desarrollo preconfigurados que incluyen sistemas operativos, bases de datos, herramientas de desarrollo y middleware. Los desarrolladores pueden centrarse en la creación de software sin preocuparse por la infraestructura subyacente.',
      'Modelo que permite a los usuarios acceder a aplicaciones completamente gestionadas a través de Internet. No requieren instalación ni mantenimiento, ya que el proveedor se encarga de su administración.',
      'Entrega de recursos informáticos bajo demanda a través de Internet. En lugar de depender de servidores físicos locales, los usuarios pueden acceder a servicios alojados en centros de datos remotos administrados por proveedores de nube.',
      'Modelo en el que los proveedores de la nube ofrecen recursos de infraestructura virtualizados, como servidores, almacenamiento y redes, a través de Internet. Los usuarios tienen control sobre la configuración y administración de estos recursos, pero no sobre el hardware físico.',
    ],
    correctAnswer: 'Modelo en el que los proveedores de la nube ofrecen recursos de infraestructura virtualizados, como servidores, almacenamiento y redes, a través de Internet. Los usuarios tienen control sobre la configuración y administración de estos recursos, pero no sobre el hardware físico.',
  },
  {
    question: 'El hipervisor que se ejecuta directamente sobre el hardware físico del host, proporcionando un alto rendimiento y aislamiento, se denomina:',
    options: [
      'Hipervisor de tipo 4.',
      'Hipervisor de tipo 2.',
      'Hipervisor de tipo 5.',
      'Hipervisor de tipo 3.',
      'Hipervisor de tipo 1.',
    ],
    correctAnswer: 'Hipervisor de tipo 1.',
  },
  {
    question: 'Servicios administrados de cómputo:',
    options: [
      'Arquitectura en la que una aplicación se divide en múltiples servicios independientes que pueden desarrollarse, implementarse y escalarse de manera autónoma.',
      'Soluciones tecnológicas en las que un proveedor de nube se encarga de gestionar, mantener y optimizar la infraestructura de cómputo subyacente. Esto permite a las organizaciones centrarse en el desarrollo y ejecución de sus aplicaciones sin la complejidad de administrar servidores, almacenamiento, redes o sistemas operativos.',
      'Unidad estándar de software que empaqueta código y todas sus dependencias para que una aplicación se ejecute de manera rápida y confiable en cualquier entorno.',
      'Proceso mediante el cual se buscan estrategias para reducir el gasto en recursos computacionales sin comprometer el rendimiento, la seguridad o la disponibilidad de los servicios en la nube.',
      'Conjunto de servidores que trabajan juntos para ejecutar y gestionar contenedores de manera eficiente. Los proveedores de servicios en la nube ofrecen soluciones administradas que automatizan la orquestación, el escalado y la gestión de estos contenedores.',
    ],
    correctAnswer: 'Soluciones tecnológicas en las que un proveedor de nube se encarga de gestionar, mantener y optimizar la infraestructura de cómputo subyacente. Esto permite a las organizaciones centrarse en el desarrollo y ejecución de sus aplicaciones sin la complejidad de administrar servidores, almacenamiento, redes o sistemas operativos.',
  }
]