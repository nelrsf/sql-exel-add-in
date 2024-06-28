/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

import { DB } from "./Model/DB";

/* global console, document, Excel, Office */

// The initialize function must be run each time a new page is loaded
Office.onReady(() => {
  document.getElementById("sideload-msg").style.display = "none";
  document.getElementById("app-body").style.display = "flex";
  document.getElementById("run").onclick = run;
});

export async function run() {
  try {
    await Excel.run(async (context) => {
      /**
       * Insert your Excel code here
       */
      const input = document.getElementById("desc_input");
      const term = input.nodeValue || "";

      const db = new DB();
      db.connect();
      runquery(db, term)

    });
  } catch (error) {
    console.error(error);
  }
}


function runquery(db: DB, term: string) {
  db.query(`SELECT * FROM public.materiales_sap WHERE materiales_sap.descripcion LIKE *${term}*`)
    .then(
      (result: any) => {
        result.rows.forEach(
          (value: any) => {
            console.log(value.join(", "))
          }
        )
      }
    )
}