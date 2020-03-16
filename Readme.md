# COVID19 GraphQL Rapor Sunucusu

## **Kurulum öncesi gereksinimler**

- NodeJS
- Yarn (tercihe göre NPM) paket yöneticisi

## **Kurulum ve sunucuyu başlatma**

Kurulum için, `yarn` ya da `npm install` komutunu ana dizinden çağırmanız yeterli olacaktır.

GraphQL sunucusunu başlatmak için `yarn start` ya da `npm run start` komutunu çağırmanız yeterli olacaktır.

[Yerel sunucu](http://localhost:4000/graphql) üzerinden bir çalışma/test ortamı sağlamaktadır. Bu ortamda sağlanan sorguları aşağıda belirtilen gibi çağırabilirsiniz.

```graphql
query ListReports {
  listReports {
    place {
      id
      state
      region
      latitude
      longitude
    }
    confirmed
    recovered
    deaths
    active
    lastUpdate
  }
}
```

Bu sorgu tüm rapor konumlarına göre raporların listelenmesini sağlar.

```graphql
query GetReport {
  getReport(id: KONUM_IDSI) {
    place {
      id
      state
      region
      latitude
      longitude
    }
    confirmed
    recovered
    deaths
    active
    lastUpdate
  }
}
```

Bu sorgu ise konumlara atanmış id üzerinden sadece konuma özel raporun getirilmesini sağlar.
