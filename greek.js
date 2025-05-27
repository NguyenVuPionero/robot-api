const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware để parse JSON
app.use(bodyParser.json());

// Định nghĩa route cho API
app.post('/geekplus/api/artemis/pushJson/skuInfoImport', (req, res) => {
    const data = req.body;

    // Xử lý dữ liệu nhận được
    console.log('Received data:', data);
    if (validUserKey(data)) {
        return res.status(400).json({
            error: validUserKey(data)
        });
    }

    if (validSku(data.body.sku_list)){
        return res.status(400).json({
            error: validSku(data.body.sku_list)
        });
    }


    // Trả về response

    res.status(200).json({
        header: {
            msgCode: "200",
            message: "Call succeed!",
            data: data,
        },
        body: {
            success: true
        }
    });
});


app.post('/geekplus/api/artemis/pushJson/receiptNoteImport', (req, res) => {
    const data = req.body;

    // Xử lý dữ liệu nhận được
    console.log('Received data:', data);

    // Trả về response
    res.status(200).json({
        message: 'SKU Information synchronized successfully',
        data: data,
    });
});

app.post('/geekplus/api/artemis/pushJson/outOrderImport', (req, res) => {
    const data = req.body;

    // Xử lý dữ liệu nhận được
    console.log('Received data:', data);

    // Trả về response
    res.status(200).json({
        message: 'SKU Information synchronized successfully',
        data: data,
    });
});

app.post('/geekplus/api/artemis/pushJson/containerRelease', (req, res) => {
    const data = req.body;

    // Xử lý dữ liệu nhận được
    console.log('Received data:', data);

    // Trả về response
    res.status(200).json({
        message: 'SKU Information synchronized successfully',
        data: data,
    });
});

app.post('/geekplus/api/artemis/pushJson/outOrderCancel', (req, res) => {
    const data = req.body;
    // Xử lý dữ liệu nhận được
    console.log('Received data:', data);
    if (validUserKey(data)) {
        return res.status(400).json({
            error: validUserKey(data)
        });
    }

    // Trả về response
    res.status(200).json({
        header: {
            msgCode: "200",
            message: "Call succeed!"
        },
        data: data,
        body: {
            "order_amount": 2,
            "order_list": [
                {
                    "out_order_code": "order001",
                    "warehouse_code": "geekplus",
                    "owner_code": "lidong",
                    "cancel_date": 1481192046000,
                    "remark": "",
                    "operation_result": 0
                },
                {
                    "out_order_code": "order002",
                    "warehouse_code": "geekplus",
                    "owner_code": "lidong",
                    "cancel_date": 1481192046000,
                    "remark": "",
                    "operation_result ": 0
                }
            ]
        }

    });
});

// Hàm kiểm tra xem chuỗi có rỗng hay không
function isEmptyString(str) {
    return !str || str.trim() === '';
}

// Hàm kiểm tra tính hợp lệ của userKey
function validUserKey(userKey) {
    // Kiểm tra userKey có hợp lệ hay không
    if (!userKey.header){
        return "Invalid header";
    }
    if (isEmptyString(userKey.header?.user_id))
        return "Invalid user_id";
    if (isEmptyString(userKey.header?.user_key))
        return "Invalid user_key"
}

// Hàm kiểm tra tính hợp lệ của sku
function validSku(sku){
    if (!Array.isArray(sku) && sku.some()) return "Invalid sku";

    sku.forEach((element) => {
        if ( element.sku_code === undefined || isEmptyString(element.sku_code)) {
            return "Invalid sku_code";
        }

        if ( element.warehouse_code === undefined || isEmptyString(element.warehouse_code)) {
            return "Invalid warehouse_code";
        }

        if ( element.owner_code === undefined || isEmptyString(element.owner_code)) {
            return "Invalid owner_code";
        }
    });


    // check bar_code in list bar_code_list
    if (Array.isArray(sku.bar_code_list) && sku.bar_code_list.some()){
        sku.bar_code_list.forEach((element) => {
            if ( element.bar_code === undefined || isEmptyString(element.bar_code)) {
                return "Invalid bar_code";
            }
        });
    }
}

module.exports = app;