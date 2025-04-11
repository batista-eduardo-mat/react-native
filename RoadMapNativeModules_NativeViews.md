# Roadmap Native Modules y Native Views

## Fase 1: Fundamentos

Con Native Modules y Native Views, debes tener un conocimiento sólido en:
- **JavaScript** y **TypeScript** (TypeScript es recomendado para trabajar con Native Modules en React Native).
- React Native básico: Hooks, navegación, manejo de estado.
Desarrollo Nativo en **iOS** y **Android**:

- **iOS**: Swift (opcionalmente Objective-C).

- **Android**: Kotlin (opcionalmente Java).
 Uso de la Terminal y herramientas CLI.

## Fase 2: Introducción a Native Modules

Los Native Modules permiten ejecutar código nativo dentro de React Native. Para aprenderlos:
**Comprender la arquitectura de React Native** y el **Bridge** (cómo se comunica JS con código nativo).
Crear un módulo nativo en Android usando Kotlin:

- Definir una clase que extienda ReactContextBaseJavaModule.
- Usar @ReactMethod para exponer funciones a JS.
- Registrar el módulo en PackageList.
Crear un módulo nativo en iOS usando Swift:
- Definir una clase que extienda RCTBridgeModule.
- Usar @objc y static func moduleName() -> String.
- Registrar el módulo en RCTBridge.
- **Exponer métodos nativos** y probarlos en React Native con Native Modules.

## Fase 3: Introducción a Native Views

Si quieres integrar vistas nativas en React Native, debes aprender:
**Android:**

- Crear una clase que extienda SimpleViewManager<View>.
- Sobrescribir createViewInstance() para devolver la vista nativa.
- Registrar la vista en UIManager.

**iOS:**

- Crear una subclase de RCTViewManager.
- Definir override func view() -> UIView.
- Exponer propiedades personalizadas con @objc dynamic var.
- **Integrar una vista nativa dentro de React Native con JSX.**

## Fase 4: Profundización y Casos Avanzados

 **Comunicarse entre JS y código** nativo con:

- Eventos (EventEmitter en Android, sendEvent en iOS).
- Callbacks y Promises en Native Modules.
- Props personalizadas en Native Views.

 **Optimizar el rendimiento con:**
- UIThread vs JS Thread.
- Uso eficiente del Bridge de React Native.
- **Compatibilizar código con Expo y React Native CLI.
 Manejo de errores y debugging en Native Modules y Native Views.**

## Fase 5: Proyectos y Especialización

 - Integrar APIs nativas como Cámara, Bluetooth, Sensores, GPS, etc..
 - Construir un módulo reutilizable para compartir entre varios proyectos.
 - Publicar un Native Module en NPM.
 - Contribuir a React Native o librerías open-source de integración nativa.

### Notas:
- Practica con proyectos reales y analiza cómo funcionan librerías como react-native-reanimated o react-native-gesture-handler.
- Documentación oficial de [React Native](https://reactnative.dev/) y revisa módulos nativos ya implementados.
- Manejar correctamente la compatibilidad entre versiones de React Native y dependencias nativas.