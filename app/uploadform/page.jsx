'use client';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Home() {
    var _this = this;
    var _a = useState([]), allImage = _a[0], setAllImage = _a[1];
    var _b = useState([]), allZip = _b[0], setAllZip = _b[1];
    var _c = useState(null), image = _c[0], setImage = _c[1];
    var _d = useState(null), zipFile = _d[0], setZipFile = _d[1];
    var fetchFiles = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, axios.get("/api/uploads")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.data];
                case 2:
                    data = _a.sent();
                    setAllImage(data === null || data === void 0 ? void 0 : data.files);
                    setAllZip(data === null || data === void 0 ? void 0 : data.zips);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error fetching files:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var formData, response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!image && !zipFile) {
                        alert("Please upload an image or a zip file");
                        return [2 /*return*/];
                    }
                    formData = new FormData();
                    if (image) {
                        formData.append("image", image);
                    }
                    if (zipFile) {
                        formData.append("zip", zipFile);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, axios.post("/api/uploads", formData)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.data];
                case 3:
                    data = _a.sent();
                    fetchFiles();
                    console.log({ data: data });
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    console.error("Error uploading files:", error_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        fetchFiles();
    }, []);
    return (<main className="flex min-h-screen flex-col items-center justify-between p-24 gap-5">
      <form onSubmit={handleSubmit} className="w-1/2 mx-auto flex flex-col gap-5">
      <input type="file" name="image" id="image" onChange={function (e) { var _a; return setImage(((_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0]) || null); }} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
      <input type="file" name="zip" id="zip" onChange={function (e) { var _a; return setZipFile(((_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0]) || null); }} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
        <div className="flex justify-center items-center">
          <button type='submit' className="px-12 py-3 rounded text-white bg-red-500">Upload</button>
        </div>
      </form>

      <div className="w-full flex flex-wrap">
        {allImage && allImage.length > 0 && allImage.map(function (cur, i) { return (<div key={i} className='w-1/3 mx-auto p-4 border border-purple-500 ring-2'>
            <img src={"./images/".concat(cur)} alt={"image".concat(i)}/>
          </div>); })}
        {allZip && allZip.length > 0 && allZip.map(function (cur, i) { return (<div key={i} className='w-1/3 mx-auto p-4 border border-blue-500 ring-2'>
            <a href={"./zip/".concat(cur)} download>
              <button className="px-12 py-3 rounded text-white bg-blue-500">Download ZIP {i + 1}</button>
            </a>
          </div>); })}
      </div>
    </main>);
}