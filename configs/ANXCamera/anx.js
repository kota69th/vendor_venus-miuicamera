const TAG = "[ANX]";
const NativeLog = new NativeFunction(Module.getExportByName(null, '__android_log_write'), 'int', ['int', 'pointer', 'pointer']);
const NativeTAG = Memory.allocUtf8String(TAG);
NativeLog(3, NativeTAG, Memory.allocUtf8String("Enter"));

rpc.exports = {
    init: function (stage, parameters) {
        NativeLog(3, NativeTAG, Memory.allocUtf8String("Init=" + stage));

        Java.perform(function () {
            NativeLog(3, NativeTAG, Memory.allocUtf8String("Perform Start"));
            //#region Initializer block
            var LogClass = Java.use("android.util.Log");
            var TAG_L = "[ANX]";
            LogClass.v(TAG_L, "Log Start");
            var ExcClass = Java.use("java.lang.Exception")
            function tryUse(callback, label) {
                label = label || "TryUse"
                try {
                    callback();
                } catch (error) {
                    LogClass.e(TAG_L, label + "->" + error)
                }
            }
            //#endregion

            //#region oldcode
            //Following code is no longer needed on Beta base
            // tryUse(function () {
            //     Java.use('miui.external.Application').initializeSdk.implementation = function () {
            //         LogClass.v(TAG_L, "Application.initializeSdk==>true");
            //         return true;
            //     }
            // }, "Application.initializeSdk");
            // tryUse(function () {
            //     Java.use('miui.external.Application').loadSdk.implementation = function () {
            //         LogClass.v(TAG_L, "Application.loadSdk==>true");
            //         return true;
            //     }
            // }, "Application.loadSdk");

            //Commented since no longer needed on alioth beta base.
            // tryUse(function () {
            //     Java.use('com.android.camera.module.Camera2Module').isParallelSessionEnable.implementation = function () {
            //         LogClass.v(TAG_L, "Camera2Module.isParallelSessionEnable==>false");
            //         return false;
            //     }
            // }, "Camera2Module.isParallelSessionEnable");
            //
            // tryUse(function () {
            //     Java.use('com.android.camera.external.perfspy.PerfspySettings').listenSettingDataChange.implementation = function () {
            //         LogClass.v(TAG_L, "PerfspySettings.listenSettingDataChange==>NOOP");
            //     }
            // }, "PerfspySettings.listenSettingDataChange");



            // tryUse(function () {
            //     Java.use('com.android.camera.external.mivi.MIVIHelper').requestCloudDataAsync.implementation = function () {
            //         LogClass.v(TAG_L, "MIVIHelper.requestCloudDataAsync==>NOOP");
            //     }
            // }, "MIVIHelper.requestCloudDataAsync");

            // tryUse(function () {
            //     Java.use('com.android.camera.external.mivi.MIVIHelper').setMiViInfo.implementation = function (str) {
            //         LogClass.v(TAG_L, "MIVIHelper.setMiViInfo==>NOOP");
            //     }
            // }, "MIVIHelper.setMiViInfo");

            //#endregion

            tryUse(function () {
                const DataItemFeature = Java.use('OooO0O0.OooO0Oo.OooO00o.OooO0O0');
                var dataItemFeature = DataItemFeature.$new();
                LogClass.v(TAG_L, "Device=" + dataItemFeature.OooOooo());
                LogClass.v(TAG_L, "DeviceImpl=" + dataItemFeature._o00o0O0O.value.$className);
            }, "Failed Device Identification");
            tryUse(function () {
                Java.use('com.android.camera.aftersales.AftersalesManager').checkSelf.implementation = function () {
                    LogClass.v(TAG_L, "AftersalesManager.checkSelf==>NOOP");
                }
            }, "AftersalesManager.checkSelf");

            tryUse(function () {
                //c_27810_0x0001 IS_FORCE_USING_NORMAL_OPERATION_MODE, Originally false for Karna
                Java.use('com.mi.device.Karna').o000OoOO.implementation = function () {
                    LogClass.v(TAG_L, "com.mi.device.Karna.o000OoOO==>true");
                    // LogClass.v(TAG_L, Java.use("android.util.Log").getStackTraceString(ExcClass.$new()));
                    return true;
                }
            }, "Karna.o000OoOO");

            tryUse(function () {
                //Dual Phone Recording
                Java.use('OooO0O0.OooO0Oo.OooO00o.OooO0O0').o00O000o.implementation = function () {
                    LogClass.v(TAG_L, "Dual Phone Recording==>true");
                    return true;
                }
            }, "Dual Phone Recording");



            //isFrontPopCamera needs to be false to use aosp popup impl
            var popupDevices = [
                "Cezanne",
                "Davinciin",
                "Davinci",
                "Lmi",
                "Raphaelin",
                "Raphael"
            ];
            for (let i = 0; i < popupDevices.length; i++) {
                const device = popupDevices[i];
                tryUse(function () {
                    Java.use('com.mi.device.' + device).oooo00o.implementation = function () {
                        LogClass.v(TAG_L, "com.mi.device." + device + ".oooo00o==>false");
                        return false;
                    }
                }, device + ".oooo00o");
            }

            //Uncomment to inspect
            // tryUse(function () {
            //     Java.use('org.json.JSONObject').toString.overload().implementation = function () {
            //         var str = this.toString();
            //         LogClass.v(TAG_L, "JSON==>" + str);
            //         return str;
            //     }
            // }, "JSONObject.toString");

            tryUse(function () {
                Java.use("com.android.camera.statistic.MistatsWrapper").commonKeyTriggerEvent.implementation = function (str, obj, str2) {
                    LogClass.v(TAG_L, "MistatsWrapper.commonKeyTriggerEvent==>NOOP");
                }
                Java.use("com.android.camera.statistic.MistatsWrapper").mistatEvent.implementation = function (str, map) {
                    LogClass.v(TAG_L, "MistatsWrapper.mistatEvent==>NOOP");
                }
                Java.use("com.android.camera.statistic.OneTrackWrapper").init.implementation = function (context) {
                    LogClass.v(TAG_L, "OneTrackWrapper.init==>NOOP");
                }
                Java.use("com.android.camera.statistic.OneTrackWrapper").track.implementation = function (str, map) {
                    LogClass.v(TAG_L, "OneTrackWrapper.track==>NOOP");
                }
                Java.use("com.android.camera2.CameraCapabilities").isSupportWatermark.implementation = function () {
                    LogClass.v(TAG_L, "CameraCapabilities.isSupportWatermark==>true");
                    return true;
                }
            }, "Stats")


            //#region Add your customization below:

            //#endregion Add your customization above!    
            var x = "";
            // tryUse(function () {
            //     function describeJavaClass(className) {
            //         var jClass = Java.use(className);
            //         x = (JSON.stringify({
            //             _name: className,
            //             _methods: jClass.class.getMethods().map(f => {
            //                 return f.toString()
            //             }),
            //             _fields: jClass.class.getFields().map(f => {
            //                 return f.toString()
            //             })
            //         }, null, 2));
            //     }

            //     describeJavaClass('com.mi.device.Aliothin');
            // }, "Print device info")
            NativeLog(3, NativeTAG, Memory.allocUtf8String("Perform End"));
        });
    },
    dispose: function () {
        console.log('[dispose]');
    }
};

function ShowToast(message) {
    if (Java.available) {
        var context = Java.use('android.app.ActivityThread').currentApplication().getApplicationContext();

        Java.scheduleOnMainThread(function () {
            var toast = Java.use("android.widget.Toast");
            toast.makeText(context, Java.use("java.lang.String").$new(message), 1).show();
        });
    }
}
