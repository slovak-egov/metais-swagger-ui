window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    //url: "swagger.yaml",
    urls: [
           {url: "https://metais.slovensko.sk/api/user-config/v3/api-docs", name: "user-config"},
           {url: "https://metais.slovensko.sk/api/dms/v3/api-docs", name: "dms"},
           {url: "https://metais.slovensko.sk/api/types-repo/v3/api-docs", name: "types-repo"},
           {url: "https://metais.slovensko.sk/api/bpm-engine/v3/api-docs", name: "bpm-engine"},  
           {url: "https://metais.slovensko.sk/api/validation/v3/api-docs", name: "validation"},
           {url: "https://metais.slovensko.sk/api/cmdb-audit/v3/api-docs", name: "cmdb-audit"},
           {url: "https://metais.slovensko.sk/api/dcom-integration/v3/api-docs", name: "dcom-integration"},
           {url: "https://metais.slovensko.sk/api/notification-engine/v3/api-docs", name: "notification-engine"},
           {url: "https://metais.slovensko.sk/api/reference-registers/v3/api-docs", name: "reference-registers"},
           {url: "https://metais.slovensko.sk/api/report/v3/api-docs", name: "report"},
           {url: "https://metais.slovensko.sk/api/tco/v3/api-docs", name: "tco"},
           {url: "https://metais.slovensko.sk/api/enums-repo/v3/api-docs", name: "enums-repo"},
           {url: "https://metais.slovensko.sk/api/impexp-cmdb/v3/api-docs", name: "impexp-cmdb"},
           {url: "https://metais.slovensko.sk/api/standards/v3/api-docs", name: "standards"},
           {url: "https://metais.slovensko.sk/api/codelist-repo/v3/api-docs", name: "codelist-repo"},
           {url: "https://metais.slovensko.sk/api/elastic/v3/api-docs", name: "elastic"},
           {url: "https://metais.slovensko.sk/api/kris/v3/api-docs", name: "kris"},
           {url: "https://metais.slovensko.sk/api/pdf-creator/v3/api-docs", name: "pdf-creator"},
           {url: "https://metais.slovensko.sk/api/integration/v3/api-docs", name: "integration"},
           {url: "https://metais.slovensko.sk/api/notification-manager/v3/api-docs", name: "notification-manager"},
           {url: "https://metais.slovensko.sk/api/cmdb/v3/api-docs", name: "cmdb"},
           {url: "https://metais.slovensko.sk/api/monitoring/v3/api-docs", name: "monitoring"},
           {url: "https://metais.slovensko.sk/api/iam/v3/api-docs", name: "iam"},
           {url: "https://metais.slovensko.sk/api/opendata/v3/api-docs", name: "opendata"},
           {url: "https://metais.slovensko.sk/api/wiki/v3/api-docs", name: "wiki"},
           {url: "https://metais.slovensko.sk/api/global-config/v3/api-docs", name: "global-config"},
           {url: "https://metais.slovensko.sk/api/trainings/v3/api-docs", name: "trainings"},
           {url: "https://metais.slovensko.sk/api/claim-manager/v3/api-docs", name: "claim-manager"},
           # list of TEST API
           {url: "https://metais-test.slovensko.sk/api/user-config/v3/api-docs", name: "TEST_user-config"},
           {url: "https://metais-test.slovensko.sk/api/dms/v3/api-docs", name: "TEST_dms"},
           {url: "https://metais-test.slovensko.sk/api/types-repo/v3/api-docs", name: "TEST_types-repo"},
           {url: "https://metais-test.slovensko.sk/api/bpm-engine/v3/api-docs", name: "TEST_bpm-engine"},  
           {url: "https://metais-test.slovensko.sk/api/validation/v3/api-docs", name: "TEST_validation"},
           {url: "https://metais-test.slovensko.sk/api/cmdb-audit/v3/api-docs", name: "TEST_cmdb-audit"},
           {url: "https://metais-test.slovensko.sk/api/dcom-integration/v3/api-docs", name: "TEST_dcom-integration"},
           {url: "https://metais-test.slovensko.sk/api/notification-engine/v3/api-docs", name: "TEST_notification-engine"},
           {url: "https://metais-test.slovensko.sk/api/reference-registers/v3/api-docs", name: "TEST_reference-registers"},
           {url: "https://metais-test.slovensko.sk/api/report/v3/api-docs", name: "TEST_report"},
           {url: "https://metais-test.slovensko.sk/api/tco/v3/api-docs", name: "TEST_tco"},
           {url: "https://metais-test.slovensko.sk/api/enums-repo/v3/api-docs", name: "TEST_enums-repo"},
           {url: "https://metais-test.slovensko.sk/api/impexp-cmdb/v3/api-docs", name: "TEST_impexp-cmdb"},
           {url: "https://metais-test.slovensko.sk/api/standards/v3/api-docs", name: "TEST_standards"},
           {url: "https://metais-test.slovensko.sk/api/codelist-repo/v3/api-docs", name: "TEST_codelist-repo"},
           {url: "https://metais-test.slovensko.sk/api/elastic/v3/api-docs", name: "TEST_elastic"},
           {url: "https://metais-test.slovensko.sk/api/kris/v3/api-docs", name: "TEST_kris"},
           {url: "https://metais-test.slovensko.sk/api/pdf-creator/v3/api-docs", name: "TEST_pdf-creator"},
           {url: "https://metais-test.slovensko.sk/api/integration/v3/api-docs", name: "TEST_integration"},
           {url: "https://metais-test.slovensko.sk/api/notification-manager/v3/api-docs", name: "TEST_notification-manager"},
           {url: "https://metais-test.slovensko.sk/api/cmdb/v3/api-docs", name: "TEST_cmdb"},
           {url: "https://metais-test.slovensko.sk/api/monitoring/v3/api-docs", name: "TEST_monitoring"},
           {url: "https://metais-test.slovensko.sk/api/iam/v3/api-docs", name: "TEST_iam"},
           {url: "https://metais-test.slovensko.sk/api/opendata/v3/api-docs", name: "TEST_opendata"},
           {url: "https://metais-test.slovensko.sk/api/wiki/v3/api-docs", name: "TEST_wiki"},
           {url: "https://metais-test.slovensko.sk/api/global-config/v3/api-docs", name: "TEST_global-config"},
           {url: "https://metais-test.slovensko.sk/api/trainings/v3/api-docs", name: "TEST_trainings"},
           {url: "https://metais-test.slovensko.sk/api/claim-manager/v3/api-docs", name: "TEST_claim-manager"},
          ],
    "urls.primaryName": "cmdb",
    dom_id: '#swagger-ui',
    deepLinking: true,
    "syntaxHighlight.theme": "idea",
    supportedSubmitMethods: [
      "get",
      "put",
      "post",
      "options",
      "head",
      "patch"
    ],
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
