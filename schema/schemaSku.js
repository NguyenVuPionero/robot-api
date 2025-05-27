export const schema = {
    header: {
        type: 'object',
        required: true,
        properties: {
            warehouse_code: { type: 'string', required: true, maxLength: 16 },
            user_id: { type: 'string', required: true, maxLength: 16 },
            user_key: { type: 'string', required: true, maxLength: 32 }
        }
    },
    body: {
        type: 'object',
        required: true,
        properties: {
            sku_amount: { type: 'number', required: false, min: 0 }, // int(8)
            sku_list: {
                type: 'array',
                required: true, // Y cho sku_list
                items: { // Định nghĩa schema cho mỗi phần tử trong mảng sku_list
                    type: 'object',
                    properties: {
                        warehouse_code: { type: 'string', required: true, maxLength: 16 },
                        owner_code: { type: 'string', required: true, maxLength: 16 },
                        owner_name: { type: 'string', required: false, maxLength: 64 },
                        sku_code: { type: 'string', required: true, maxLength: 64 },
                        sku_id: { type: 'string', required: false, maxLength: 32 },
                        sku_name: { type: 'string', required: false, maxLength: 128 },
                        remark: { type: 'string', required: false, maxLength: 255 },
                        unit: { type: 'string', required: false, maxLength: 12 },
                        shelf_life: { type: 'number', required: false }, // int(4)
                        sku_status: { type: 'number', required: false }, // tinyint(4) - có thể là 0/1
                        sku_abc: { type: 'string', required: false, maxLength: 10 },
                        wares_type_code: { type: 'string', required: false, maxLength: 64 },
                        sku_price: { type: 'number', required: false }, // decimal(13,3)
                        length: { type: 'number', required: false }, // decimal(8,1)
                        width: { type: 'number', required: false }, // decimal(8,1)
                        height: { type: 'number', required: false }, // decimal(8,1)
                        volume: { type: 'number', required: false }, // decimal(21,3)
                        net_weight: { type: 'number', required: false }, // decimal(10,3)
                        gross_weight: { type: 'number', required: false }, // decimal(10,3)
                        min_count: { type: 'number', required: false }, // int(10)
                        max_count: { type: 'number', required: false }, // int(10)
                        production_location: { type: 'string', required: false, maxLength: 64 },
                        specification: { type: 'string', required: false, maxLength: 100 },
                        sku_brand: { type: 'string', required: false, maxLength: 32 },
                        item_size: { type: 'string', required: false, maxLength: 100 },
                        item_color: { type: 'string', required: false, maxLength: 100 },
                        item_style: { type: 'string', required: false, maxLength: 100 },
                        pic_url: { type: 'string', required: false, maxLength: 128 },
                        is_sequence_sku: { type: 'number', required: false }, // tinyint(4)
                        is_fragile: { type: 'number', required: false }, // tinyint(4)
                        is_dangerous: { type: 'number', required: false }, // tinyint(4)
                        is_expensive: { type: 'number', required: false }, // tinyint(4)
                        is_abnormity: { type: 'number', required: false }, // tinyint(4)
                        is_need_product_batch_manage: { type: 'number', required: false }, // tinyint(4)
                        is_need_exp_manage: { type: 'number', required: false }, // tinyint(4)
                        is_need_batch_manage: { type: 'number', required: false }, // tinyint(4)
                        is_material: { type: 'number', required: false }, // tinyint(4)
                        is_bar_code_full_update: { type: 'number', required: false }, // tinyint(4)
                        bar_code_list: {
                            type: 'array',
                            required: false,
                            items: {
                                type: 'object',
                                properties: {
                                    sku_code: { type: 'string', required: false, maxLength: 64 },
                                    bar_code: { type: 'string', required: true, maxLength: 32 }
                                }
                            }
                        },
                        input_date: { type: 'number', required: false }, // long
                        sku_packing: {
                            type: 'array',
                            required: false,
                            items: {
                                type: 'object',
                                properties: {
                                    sku_code: { type: 'string', required: false, maxLength: 64 },
                                    packing_spec: { type: 'string', required: true, maxLength: 16 },
                                    mini_packing_code: { type: 'string', required: false, maxLength: 32 },
                                    mini_packing_amount: { type: 'number', required: true }, // int(8)
                                    small_packing_unit: { type: 'string', required: false, maxLength: 16 },
                                    mini_length: { type: 'number', required: true }, // decimal(6,1)
                                    mini_width: { type: 'number', required: true }, // decimal(6,1)
                                    mini_height: { type: 'number', required: true }, // decimal(6,1)
                                    mini_volume: { type: 'number', required: true }, // decimal(16,3)
                                    mini_weight: { type: 'number', required: true }, // decimal(8,1)
                                    second_packing_code: { type: 'string', required: false, maxLength: 32 },
                                    second_packing_amount: { type: 'number', required: true }, // int(8)
                                    medium_packing_unit: { type: 'string', required: false, maxLength: 16 },
                                    second_length: { type: 'number', required: true }, // decimal(6,1)
                                    second_width: { type: 'number', required: true }, // decimal(6,1)
                                    second_height: { type: 'number', required: true }, // decimal(6,1)
                                    second_volume: { type: 'number', required: true }, // decimal(16,3)
                                    second_weight: { type: 'number', required: true }, // decimal(8,1)
                                    third_packing_code: { type: 'string', required: false, maxLength: 32 },
                                    third_packing_amount: { type: 'number', required: true }, // int(8)
                                    large_packing_unit: { type: 'string', required: false, maxLength: 16 },
                                    third_length: { type: 'number', required: true }, // decimal(6,1)
                                    third_width: { type: 'number', required: true }, // decimal(6,1)
                                    third_height: { type: 'number', required: true }, // decimal(6,1)
                                    third_volume: { type: 'number', required: true }, // decimal(16,3)
                                    third_weight: { type: 'number', required: true }, // decimal(8,1)
                                    reservation1: { type: 'string', required: true, maxLength: 32 },
                                    reservation2: { type: 'string', required: true, maxLength: 32 },
                                    reservation3: { type: 'string', required: true, maxLength: 32 }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

/**
 * Hàm kiểm tra kiểu dữ liệu và tính bắt buộc của một đối tượng so với một schema.
 * @param {object} dataToValidate Đối tượng dữ liệu cần kiểm tra.
 * @param {object} schema Đối tượng schema định nghĩa kiểu dữ liệu mong muốn.
 * @param {string} path Chuỗi đại diện cho đường dẫn hiện tại trong object (dùng cho thông báo lỗi).
 * @returns {Array<string>} Mảng các lỗi tìm thấy (rỗng nếu hợp lệ).
 */
function validateData(dataToValidate, schema, path = '') {
    const errors = [];

    // Kiểm tra nếu dataToValidate không phải là object hoặc null khi schema yêu cầu object
    if (schema.type === 'object' && (typeof dataToValidate !== 'object' || dataToValidate === null)) {
        errors.push(`Lỗi: ${path || 'Dữ liệu gốc'} mong đợi là object, nhưng nhận được ${typeof dataToValidate}.`);
        return errors;
    }

    // Kiểm tra nếu dataToValidate là array nhưng schema yêu cầu object, hoặc ngược lại
    if (schema.type === 'array' && !Array.isArray(dataToValidate)) {
        errors.push(`Lỗi: ${path || 'Dữ liệu gốc'} mong đợi là array, nhưng nhận được ${typeof dataToValidate}.`);
        return errors;
    }

    if (schema.type === 'object' && schema.properties) {
        for (const key in schema.properties) {
                const propSchema = schema.properties[key];
            const currentPath = path ? `${path}.${key}` : key;

            // Kiểm tra tính bắt buộc
            if (propSchema.required && !dataToValidate.hasOwnProperty(key)) {
                errors.push(`Lỗi: Thiếu thuộc tính bắt buộc '${currentPath}'.`);
                continue; // Chuyển sang thuộc tính tiếp theo
            }

            const actualValue = dataToValidate[key];
            const actualType = typeof actualValue;

            // Bỏ qua kiểm tra kiểu nếu thuộc tính là tùy chọn và không có giá trị
            if (!propSchema.required && (actualValue === undefined || actualValue === null)) {
                continue;
            }

            // Kiểm tra các kiểu object lồng nhau
            if (propSchema.type === 'object' && propSchema.properties) {
                if (actualType !== 'object' || actualValue === null) {
                    errors.push(`Lỗi: Thuộc tính '${currentPath}' mong đợi là object, nhưng nhận được '${actualType}'.`);
                } else {
                    errors.push(...validateData(actualValue, propSchema, currentPath));
                }
            }
            // Kiểm tra các kiểu array
            else if (propSchema.type === 'array' && propSchema.items) {
                if (!Array.isArray(actualValue)) {
                    errors.push(`Lỗi: Thuộc tính '${currentPath}' mong đợi là array, nhưng nhận được '${actualType}'.`);
                } else {
                    actualValue.forEach((item, index) => {
                        errors.push(...validateData(item, propSchema.items, `${currentPath}[${index}]`));
                    });
                }
            }
            // Kiểm tra các kiểu dữ liệu cơ bản (string, number, boolean)
            else if (actualType !== propSchema.type) {
                // Xử lý đặc biệt cho tinyint có thể là boolean hoặc number
                if (propSchema.type === 'number' && (propSchema.maxLength === 4 || propSchema.maxLength === 8) && (actualType === 'boolean' || actualType === 'number')) {
                    // Chấp nhận tinyint là number hoặc boolean (0/1)
                } else {
                    errors.push(`Lỗi: Thuộc tính '${currentPath}' mong đợi là '${propSchema.type}', nhưng nhận được '${actualType}'.`);
                }
            }

            // Kiểm tra độ dài (maxLength) cho string
            if (propSchema.type === 'string' && propSchema.maxLength && typeof actualValue === 'string' && actualValue.length > propSchema.maxLength) {
                errors.push(`Lỗi: Thuộc tính '${currentPath}' vượt quá độ dài tối đa ${propSchema.maxLength} ký tự.`);
            }

            // Kiểm tra giá trị số min
            if (propSchema.type === 'number' && propSchema.min !== undefined && typeof actualValue === 'number' && actualValue < propSchema.min) {
                errors.push(`Lỗi: Thuộc tính '${currentPath}' phải lớn hơn hoặc bằng ${propSchema.min}.`);
            }
        }
    }
    return errors;
}