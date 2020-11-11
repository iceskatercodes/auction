'use strict';
/**
 * @author Aravind S
 * created On 8th Sep 2020
 */

let onelogin = {};

onelogin.login = {
  type: "object",
  properties: {
    email_phone: {
      type: "string"
    },
    password: {
      type: "string"
    }
  },
  required: ["email_phone", "password"]
}

onelogin.signupReq = {
  type: "object",
  properties: {
    fullname: {
      type: "string"
    },
    email: {
      type: "string"
    },
    password: {
      type: "string"
    },
    phone: {
      type: "string"
    },
    phone_code: {
      type: "string"
    }
  },
  required: ["fullname", "phone", "password"]
}

onelogin.verifySignup = {
  type: "object",
  properties: {
    signup_jwt: {
      type: "string"
    },
    email_pin: {
      type: "integer"
    },
    phone_pin: {
      type: "integer"
    }
  },
  required: ["signup_jwt"]
}

onelogin.addUserReq = {
  type: "object",
  properties: {
    fullname: {
      type: "string"
    },
    email: {
      type: "string"
    },
    password: {
      type: "string"
    },
    phone: {
      type: "string"
    },
    phone_code: {
      type: "string"
    },
    role_id:{
      type:"integer"
    }
  },
  required: ["fullname", "phone", "password","role_id"]
}

onelogin.keepAlive = {
  type: "object",
  properties: {
    tkn: {
      type: "string"
    }
  },
  required: ["tkn"]
}

onelogin.resetPass = {
  type: "object",
  properties: {
    email_phone: {
      type: "string"
    }
  },
  required: ["email_phone"]
}

onelogin.resetPassVerify = {
  type: "object",
  properties: {
    verify_code: {
      type: "string"
    },
    new_password: {
      type: "string"
    },
    checksum: {
      type: "string"
    }
  },
  required: ["verify_code", "new_password", "checksum"]
}

onelogin.resettingPass = {
  type: "object",
  properties: {
    password: {
      type: "string"
    }
  },
  required: ["password"]
}

onelogin.addCompanyDetail = {
  type: "object",
  properties: {
    company_name: {
      type: "string"
    },
    company_type: {
      type: "string"
    },
    pan: {
      type: "string"
    },
    tan: {
      type: "string"
    },
    gst: {
      type: "string"
    },
    is_kyc_done: {
      type: "boolean"
    },
    status: {
      type: "boolean"
    },
    user_id: {
      type: "string"
    }
  },
  required: ["company_name", "pan"]
}

onelogin.addConsumerDetail = {
  type: "object",
  properties: {
    billing_address: {
      type: "array"
    },
    account_details: {
      type: "array"
    },
    deliver_address: {
      type: "array"
    },
    status: {
      type: "boolean"
    },
    consumer_email_phone: {
      type: "string"
    }
  }
}

onelogin.updateKyc = {
  type: "object",
  properties: {
    kyc: {
      type: "boolean"
    },
    id: {
      type: "string"
    }
  },
  required: ["kyc", "id"]
}

onelogin.addtanker = {
  type: "object",
  properties: {
    supplier_id: {
      type: "number"
    },
    tanker_id: {
      type: 'string'
    },
    weekly_availablility: {
      type: "array"
    },
    cash_on_delivery: {
      type: "boolean"
    },
    trips_per_day: {
      type: "string"
    },
    min_tds: {
      type: "string"
    },
    max_tds: {
      type: "string"
    },
    tanker_profile: {
      type: "array"
    },
    is_kyt_done: {
      type: "boolean"
    },
    status: {
      type: "boolean"
    },
    trips_per_day: {
      type: "integer"
    },
    cash_on_delivery: {
      type: "boolean"
    },
    active_from: {
      type: "string"
    },
    inactive_from: {
      type: "string"
    },
    is_iot_installed: {
      type: "boolean"
    },
    default_rate:{
      type:"number"
    }

  },
  required: ["tanker_id","default_rate","trips_per_day"]
}

onelogin.updatetanker = {
  type: "object",
  properties: {
    weekly_availablility: {
      type: "array"
    },
    cash_on_delivery: {
      type: "boolean"
    },
    trips_per_day: {
      type: "string"
    },
    min_tds: {
      type: "string"
    },
    max_tds: {
      type: "string"
    },
    tanker_profile: {
      type: "array"
    },
    is_kyt_done: {
      type: "boolean"
    },
    status: {
      type: "boolean"
    },
    trips_per_day: {
      type: "integer"
    },
    cash_on_delivery: {
      type: "boolean"
    },
    contact_phone: {
      type: "string"
    },
    active_from: {
      type: "string"
    },
    inactive_from: {
      type: "string"
    },
    is_iot_installed: {
      type: "boolean"
    }

  }
}

onelogin.addTankerPricing = {
  type: "object",
  properties: {
    tanker_id: {
      type: "string"
    },
    supplier_id: {
      type: "number"
    },
    pincode: {
      type: "string"
    },
    status: {
      type: "boolean"
    },
    single_rate: {
      type: "number"
    },
    weekly_rate: {
      type: "number"
    },
    fortnightly_rate: {
      type: "number"
    },
    monthly_rate: {
      type: "number"
    },
    single_cfee: {
      type: "number"
    },
    weekly_cfee: {
      type: "number"
    },
    fortnightly_cfee: {
      type: "number"
    },
    monthly_cfee: {
      type: "number"
    }
  }
}

onelogin.updateTankerPricing = {
  type: "object",
  properties: {
    tanker_id: {
      type: "number"
    },
    supplier_id: {
      type: "number"
    },
    pincode: {
      type: "string"
    },
    status: {
      type: "boolean"
    },
    single_rate: {
      type: "number"
    },
    weekly_rate: {
      type: "number"
    },
    fortnightly_rate: {
      type: "number"
    },
    monthly_rate: {
      type: "number"
    },
    single_cfee: {
      type: "number"
    },
    weekly_cfee: {
      type: "number"
    },
    fortnightly_cfee: {
      type: "number"
    },
    monthly_cfee: {
      type: "number"
    }
  }
}

onelogin.searchTanker = {
  type: "object",
  properties: {
    status: {
      type: "boolean"
    }
  }
}

onelogin.addWellData = {
  type: "object",
  properties: {
    well_name: {
      type: "string"
    },
    supplier_id: {
      type: "string"
    },
    max_tds: {
      type: "string"
    },
    min_tds: {
      type: "string"
    },
    location_geo: {
      type: "json"
    },
    status: {
      type: "boolean"
    }
  },
  required: ["max_tds","min_tds"]
}

onelogin.addFile = {
  type: "object",
  properties: {
    filename: {
      type: "file"
    }
  },
  required: ["filename"]
}

onelogin.getFile = {
  type: "object",
  properties: {
    filename: {
      type: "string"
    }
  },
  required: ["filename"]
}

onelogin.listSuppliers = {
  type: "object",
  properties: {
    search: {
      type: "integer"
    },
    offset: {
      type: "integer"
    },
    limit: {
      type: "integer"
    }
  }
}



module.exports = onelogin