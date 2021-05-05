const faker = require("faker")
exports.dbProd = [
  {
    "_id": "jsjd7s8bhs2-sndsbs22dsds",
    "nome_consorcio": faker.company.bs(),
    "created_at": faker.date.recent(),
    "updated_at": faker.date.recent(),
    "investimentos": [
      {
        "nome_investimento": faker.company.companyName(),
        "status": "Open",
        "risco": "Baixo",
        "categoria": "CDB",
        "rentabilidade": {
          "dia": "01.5%",
          "mes": "93.5%",
          "ano": "100%"
        }
      },
      {
        "nome_investimento": faker.company.companyName(),
        "status": "Open",
        "risco": "Severo",
        "categoria": "CDB",
        "rentabilidade": {
          "dia": "01.5%",
          "mes": "93.5%",
          "ano": "100%"
        }
      }
    ]
  },
  {
    "_id": "383837s8bhs2-sndsbs22dsds",
    "nome_consorcio": faker.company.bs(),
    "created_at": faker.date.recent(),
    "updated_at": faker.date.recent(),
    "investimentos": [
      {
        "nome_investimento": faker.company.companyName(),
        "status": "Open",
        "risco": "Baixo",
        "categoria": "CDB",
        "rentabilidade": {
          "dia": "01.5%",
          "mes": "93.5%",
          "ano": "100%"
        }
      }
    ]
  }
]