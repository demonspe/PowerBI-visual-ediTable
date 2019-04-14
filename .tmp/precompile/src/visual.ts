/*
 *  Power BI Visual CLI
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

module powerbi.extensibility.visual.ediTableA518F460AA974914B74E6D0FA28C7207  {
    "use strict";
    export class Visual implements IVisual {
        private target: HTMLElement;
        private table: HTMLElement;

        constructor(options: VisualConstructorOptions) {
            this.target = options.element;
            this.target.style.overflow = "auto";
            this.target.style.backgroundColor = "#FFFFFF";
            if (typeof document !== "undefined") {
                //Создает HTML element
                const h: HTMLElement = document.createElement("h3");
                h.innerHTML = "Редактируемая таблица";
                this.target.appendChild(h);
                let p1: HTMLElement = document.createElement("p");
                p1.style.fontSize ="11px";
                p1.innerHTML = "Столбцы в названии которых встречается 'id' заблокированы для редактирования. "+ 
                "Они потребуются в дальнейшем для идентификации записи в базе, которую мы хотим обновить.";
                this.target.appendChild(p1);
                let p2: HTMLElement = document.createElement("p");
                p2.style.fontSize ="11px";
                p2.innerHTML = "upd: Плохая новость: к сожалению реализация Visual не позволяет отправлять внешние http запросы :(";
                this.target.appendChild(p2);
                this.table = document.createElement("table");
                this.target.appendChild(this.table);
                this.target.appendChild(this.table);
            }
        }

        public update(options: VisualUpdateOptions) {
            const dataView: DataView = options.dataViews[0];
            let height: number = options.viewport.height;
            let width: number = options.viewport.width;

            this.target.removeChild(this.table);
            this.table = document.createElement("table");
            this.table.classList.add("table");
            //this.target.style.height = height.toString();
            //this.target.style.width = width.toString();

            let tr: HTMLElement = document.createElement("tr");
            let td: HTMLElement;
            if (typeof this.table !== "undefined") {
                //Headers
                dataView.table.columns.forEach((col) => {
                    td = document.createElement("th");
                    td.innerHTML = col.displayName;
                    tr.appendChild(td);
                });
                this.table.appendChild(tr);

                //Data
                let inp: HTMLInputElement;
                dataView.table.rows.forEach((row) => {
                    let colIndx = 0;
                    tr = document.createElement("tr");
                    row.forEach(data => {
                        td = document.createElement("td");
                        if(dataView.table.columns[colIndx].displayName.search(/id/i) === -1){
                            inp = document.createElement("input");
                            inp.classList.add("form-control");
                            inp.type = "text";
                            inp.value = data.toString();
                            inp.onchange = (e) => {
                                alert(`
Вы изменили поле.
По событию нужно отправлять запрос в базу для обнолвления данных.
Но увы эти запросы не срабатывают :(
                                `); 
                                
                                fetch('https://api.ipify.org?format=json')
                                .then(response => response.json()).then(data => alert(data.ip));

                                var xhr = new XMLHttpRequest();
                                xhr.open('GET','https://api.ipify.org?format=json',true);
                                xhr.send();
                                xhr.onreadystatechange = function() {
                                if (xhr.readyState != 4) {
                                    return
                                }
                                    alert('end')
                                }
                            };
                            td.appendChild(inp);
                        }
                        else{
                            td.innerHTML = data.toString();
                        }
                        colIndx++;
                        tr.appendChild(td); 
                    });
                    this.table.appendChild(tr);
                });
            }

            //Append
            this.target.appendChild(this.table);
        }
    }
}