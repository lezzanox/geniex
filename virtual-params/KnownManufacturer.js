let result = "Other"
const knownManufacturers = [
    "CIOT",
    "CMDC",
    "GGCL",
    "Huawei Technologies Co., Ltd",
    "ZIONCOM",
    "ZTE"
  ];

let manu = declare("DeviceID.Manufacturer", {value: Date.now()});
if(knownManufacturers.includes(manu.value[0])){
    result = manu.value[0];
} else {
    result = "Other"
}
return {writable: false, value: [result, "xsd:string"]};