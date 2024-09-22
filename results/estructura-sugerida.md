
### **Carpeta `results/`**
Esta carpeta debe contener los resultados de las pruebas realizadas con cada test suite. Estos resultados nos permitirán comparar el rendimiento y la eficiencia de las distintas tecnologías evaluadas. En esta carpeta podremos almacenar los reportes de ejecución de pruebas, tiempos de ejecución, cobertura de código, entre otros.

#### Estructura sugerida para `results/`

```bash
results/
└── vitest/
    ├── coverage/                # Carpeta que contiene los reportes de cobertura de código generados por Vitest.
    ├── test-results.json         # Archivo en formato JSON con los resultados detallados de las pruebas.
    └── performance-report.md     # Documento con el análisis del rendimiento, tiempos de ejecución y observaciones generales.
```

## Descripción de la Estructura
1. `coverage/`: Esta carpeta almacenará los informes de cobertura de código generados después de ejecutar las pruebas con la opción de cobertura habilitada (--coverage). Contiene archivos que detallan qué partes del código fueron cubiertas por las pruebas.

2. `test-results.json`: Un archivo JSON que almacena los resultados de las pruebas, como el número de pruebas pasadas, fallidas y los tiempos de ejecución. Este archivo puede ser útil para integraciones con herramientas de CI/CD o para visualización de resultados.

3. `performance-report.md`: Un archivo Markdown que contiene un análisis detallado del rendimiento de las pruebas, incluyendo tiempos de ejecución, porcentaje de cobertura y cualquier observación sobre la eficiencia de Vitest. Este archivo es útil para compartir y documentar el rendimiento de las pruebas dentro del equipo o repositorio.