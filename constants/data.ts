// import { handleValuesSum } from "../methods/handleValuesSum";
import { handleValuesSum } from "../methods/handleValuesSum";
import { billsList } from "./bills";

export const data = {
    year: [
        {
            name: 'styczeń',
            type: 'Month',
            value: function() {
                return this.categories.reduce((acc, cur) => acc + cur.value(), 0);
              },
            categories: [
                {
                    name: 'spożywcze',
                    type: 'Category',
                    value: function() {
                        return this.bills.reduce((acc, cur) => acc + cur.value(), 0);
                      },
                    bills: [
                        {
                            id: 1,
                            name: 'lidl',
                            type: 'Bill',
                            value: function() {
                                return this.products.reduce((acc, cur) => acc + (cur.value*cur.count), 0);
                              },
                            products: [
                                {
                                    name: 'mleko',
                                    type: 'Product',
                                    count: 3,
                                    value: 3.49
                                }
                            ]
                        },
                        {
                            id: 1,
                            name: 'biedronka',
                            type: 'Bill',
                            value: function() {
                                return this.products.reduce((acc, cur) => acc + (cur.value*cur.count), 0);
                              },
                            products: [
                                {
                                    name: 'płatki',
                                    type: 'Product',
                                    count: 1,
                                    value: 8.99
                                },
                                {
                                    name: 'olej',
                                    type: 'Product',
                                    count: 1,
                                    value: 11.99
                                },
                                {
                                    name: 'jogurt',
                                    type: 'Product',
                                    count: 5,
                                    value: 4.19
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'paliwo',
                    type: 'Category',
                    value: function() {
                        return this.bills.reduce((acc, cur) => acc + cur.value(), 0);
                    },
                    bills: [
                        {
                            id: 2,
                            name: 'BP',
                            type: 'Bill',
                            value: function() {
                                return this.products.reduce((acc, cur) => acc + (cur.value*cur.count), 0);
                              },
                            products: [
                                {
                                    name: 'paliwo',
                                    type: 'Product',
                                    count: 1,
                                    value: 150
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}