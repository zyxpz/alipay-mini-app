import promisify from '../../utils/promisify.js';

/// <reference path="../../../node_modules/mini-types/types/index.d.ts" />
var getAppStub = getApp;
var addCardAuth = my.addCardAuth;
var addPhoneContact = my.addPhoneContact;
var alert = my.alert;
var canIUse = my.canIUse;
var chooseAlipayContact = my.chooseAlipayContact;
var chooseCity = my.chooseCity;
var chooseContact = my.chooseContact;
var chooseImage = promisify(my.chooseImage);
var chooseLocation = my.chooseLocation;
var choosePhoneContact = my.choosePhoneContact;
var clearStorage = my.clearStorage;
var clearStorageSync = my.clearStorageSync;
var closeBluetoothAdapter = my.closeBluetoothAdapter;
var closeSocket = my.closeSocket;
var compressImage = my.compressImage;
var confirm = my.confirm;
var connectBLEDevice = my.connectBLEDevice;
var connectSocket = my.connectSocket;
var createAnimation = my.createAnimation;
var createCanvasContext = my.createCanvasContext;
var createIntersectionObserver = my.createIntersectionObserver;
var createMapContext = my.createMapContext;
var createSelectorQuery = my.createSelectorQuery;
var createWebViewContext = my.createWebViewContext;
var datePicker = my.datePicker;
var disconnectBLEDevice = my.disconnectBLEDevice;
var downloadFile = my.downloadFile;
var getAuthCode = my.getAuthCode;
var getAuthUserInfo = my.getAuthUserInfo;
var getBatteryInfo = my.getBatteryInfo;
var getBatteryInfoSync = my.getBatteryInfoSync;
var getBeacons = my.getBeacons;
var getBLEDeviceCharacteristics = my.getBLEDeviceCharacteristics;
var getBLEDeviceServices = my.getBLEDeviceServices;
var getBluetoothAdapterState = my.getBluetoothAdapterState;
var getBluetoothDevices = my.getBluetoothDevices;
var getClipboard = my.getClipboard;
var getConnectedBluetoothDevices = my.getConnectedBluetoothDevices;
var getFileInfo = my.getFileInfo;
var getImageInfo = my.getImageInfo;
var getLocation = my.getLocation;
var getNetworkType = my.getNetworkType;
var getPhoneNumber = my.getPhoneNumber;
var getRunData = my.getRunData;
var getRunScene = my.getRunScene;
var getSavedFileInfo = my.getSavedFileInfo;
var getSavedFileList = my.getSavedFileList;
var getScreenBrightness = my.getScreenBrightness;
var getServerTime = my.getServerTime;
var getSetting = my.getSetting;
var getStorage = my.getStorage;
var getStorageInfo = my.getStorageInfo;
var getStorageInfoSync = my.getStorageInfoSync;
var getStorageSync = my.getStorageSync;
var getSystemInfo = my.getSystemInfo;
var getSystemInfoSync = my.getSystemInfoSync;
var getTitleColor = my.getTitleColor;
var getUpdateManager = my.getUpdateManager;
var hideAddToDesktopMenu = my.hideAddToDesktopMenu;
var hideAllAddToDesktopMenu = my.hideAllAddToDesktopMenu;
var hideAllFavoriteMenu = my.hideAllFavoriteMenu;
var hideBackHome = my.hideBackHome;
var hideFavoriteMenu = my.hideFavoriteMenu;
var hideKeyboard = my.hideKeyboard;
var hideLoading = my.hideLoading;
var hideNavigationBarLoading = my.hideNavigationBarLoading;
var hideShareMenu = my.hideShareMenu;
var hideTabBar = my.hideTabBar;
var hideTabBarRedDot = my.hideTabBarRedDot;
var hideToast = my.hideToast;
var loadFontFace = my.loadFontFace;
var makePhoneCall = my.makePhoneCall;
var multiLevelSelect = my.multiLevelSelect;
var navigateBack = promisify(my.navigateBack);
var navigateBackMiniProgram = promisify(my.navigateBackMiniProgram);
var navigateTo = promisify(my.navigateTo);
var navigateToMiniProgram = my.navigateToMiniProgram;
var notifyBLECharacteristicValueChange = my.notifyBLECharacteristicValueChange;
var offAccelerometerChange = my.offAccelerometerChange;
var offBLECharacteristicValueChange = my.offBLECharacteristicValueChange;
var offBLEConnectionStateChanged = my.offBLEConnectionStateChanged;
var offBluetoothAdapterStateChange = my.offBluetoothAdapterStateChange;
var offBluetoothDeviceFound = my.offBluetoothDeviceFound;
var offCompassChange = my.offCompassChange;
var offGyroscopeChange = my.offGyroscopeChange;
var offMemoryWarning = my.offMemoryWarning;
var offNetworkStatusChange = my.offNetworkStatusChange;
var offSocketClose = my.offSocketClose;
var offSocketError = my.offSocketError;
var offSocketMessage = my.offSocketMessage;
var offSocketOpen = my.offSocketOpen;
var offUserCaptureScreen = my.offUserCaptureScreen;
var onAccelerometerChange = my.onAccelerometerChange;
var onBeaconServiceChange = my.onBeaconServiceChange;
var onBeaconUpdate = my.onBeaconUpdate;
var onBLECharacteristicValueChange = my.onBLECharacteristicValueChange;
var onBLEConnectionStateChanged = my.onBLEConnectionStateChanged;
var onBluetoothAdapterStateChange = my.onBluetoothAdapterStateChange;
var onBluetoothDeviceFound = my.onBluetoothDeviceFound;
var onCompassChange = my.onCompassChange;
var onGyroscopeChange = my.onGyroscopeChange;
var onMemoryWarning = my.onMemoryWarning;
var onNetworkStatusChange = my.onNetworkStatusChange;
var onSocketClose = my.onSocketClose;
var onSocketError = my.onSocketError;
var onSocketMessage = my.onSocketMessage;
var onSocketOpen = my.onSocketOpen;
var onUserCaptureScreen = my.onUserCaptureScreen;
var openBluetoothAdapter = my.openBluetoothAdapter;
var openCardDetail = my.openCardDetail;
var openCardList = my.openCardList;
var openKBVoucherDetail = my.openKBVoucherDetail;
var openLocation = my.openLocation;
var openMerchantCardList = my.openMerchantCardList;
var openMerchantTicketList = my.openMerchantTicketList;
var openMerchantVoucherList = my.openMerchantVoucherList;
var openSetting = my.openSetting;
var openTicketDetail = my.openTicketDetail;
var openTicketList = my.openTicketList;
var openVoucherDetail = my.openVoucherDetail;
var openVoucherList = my.openVoucherList;
var optionsSelect = my.optionsSelect;
var pageScrollTo = my.pageScrollTo;
var previewImage = my.previewImage;
var prompt = my.prompt;
var readBLECharacteristicValue = my.readBLECharacteristicValue;
var redirectTo = my.redirectTo;
var reLaunch = my.reLaunch;
var removeSavedFile = my.removeSavedFile;
var removeStorage = my.removeStorage;
var removeStorageSync = my.removeStorageSync;
var removeTabBarBadge = my.removeTabBarBadge;
var reportAnalytics = my.reportAnalytics;
var request = my.request;
var rsa = my.rsa;
var saveFile = my.saveFile;
var saveImage = my.saveImage;
var scan = my.scan;
var SDKVersion = my.SDKVersion;
var sendSocketMessage = my.sendSocketMessage;
var setBackgroundColor = my.setBackgroundColor;
var setBackgroundTextStyle = my.setBackgroundTextStyle;
var setCanPullDown = my.setCanPullDown;
var setClipboard = my.setClipboard;
var setKeepScreenOn = my.setKeepScreenOn;
var setNavigationBar = my.setNavigationBar;
var setOptionMenu = my.setOptionMenu;
var setScreenBrightness = my.setScreenBrightness;
var setStorage = my.setStorage;
var setStorageSync = my.setStorageSync;
var setTabBarBadge = my.setTabBarBadge;
var setTabBarItem = my.setTabBarItem;
var setTabBarStyle = my.setTabBarStyle;
var showActionSheet = my.showActionSheet;
var showAuthGuide = my.showAuthGuide;
var showLoading = my.showLoading;
var showNavigationBarLoading = my.showNavigationBarLoading;
var showSharePanel = my.showSharePanel;
var showTabBar = my.showTabBar;
var showTabBarRedDot = my.showTabBarRedDot;
var showToast = my.showToast;
var startBeaconDiscovery = my.startBeaconDiscovery;
var startBluetoothDevicesDiscovery = my.startBluetoothDevicesDiscovery;
var startPullDownRefresh = my.startPullDownRefresh;
var startZMVerify = my.startZMVerify;
var stopBeaconDiscovery = my.stopBeaconDiscovery;
var stopBluetoothDevicesDiscovery = my.stopBluetoothDevicesDiscovery;
var stopPullDownRefresh = my.stopPullDownRefresh;
var switchTab = my.switchTab;
var textRiskIdentification = my.textRiskIdentification;
var tradePay = my.tradePay;
var uploadFile = my.uploadFile;
var vibrate = my.vibrate;
var vibrateLong = my.vibrateLong;
var vibrateShort = my.vibrateShort;
var watchShake = my.watchShake;
var writeBLECharacteristicValue = my.writeBLECharacteristicValue;

export { SDKVersion, addCardAuth, addPhoneContact, alert, canIUse, chooseAlipayContact, chooseCity, chooseContact, chooseImage, chooseLocation, choosePhoneContact, clearStorage, clearStorageSync, closeBluetoothAdapter, closeSocket, compressImage, confirm, connectBLEDevice, connectSocket, createAnimation, createCanvasContext, createIntersectionObserver, createMapContext, createSelectorQuery, createWebViewContext, datePicker, disconnectBLEDevice, downloadFile, getAppStub, getAuthCode, getAuthUserInfo, getBLEDeviceCharacteristics, getBLEDeviceServices, getBatteryInfo, getBatteryInfoSync, getBeacons, getBluetoothAdapterState, getBluetoothDevices, getClipboard, getConnectedBluetoothDevices, getFileInfo, getImageInfo, getLocation, getNetworkType, getPhoneNumber, getRunData, getRunScene, getSavedFileInfo, getSavedFileList, getScreenBrightness, getServerTime, getSetting, getStorage, getStorageInfo, getStorageInfoSync, getStorageSync, getSystemInfo, getSystemInfoSync, getTitleColor, getUpdateManager, hideAddToDesktopMenu, hideAllAddToDesktopMenu, hideAllFavoriteMenu, hideBackHome, hideFavoriteMenu, hideKeyboard, hideLoading, hideNavigationBarLoading, hideShareMenu, hideTabBar, hideTabBarRedDot, hideToast, loadFontFace, makePhoneCall, multiLevelSelect, navigateBack, navigateBackMiniProgram, navigateTo, navigateToMiniProgram, notifyBLECharacteristicValueChange, offAccelerometerChange, offBLECharacteristicValueChange, offBLEConnectionStateChanged, offBluetoothAdapterStateChange, offBluetoothDeviceFound, offCompassChange, offGyroscopeChange, offMemoryWarning, offNetworkStatusChange, offSocketClose, offSocketError, offSocketMessage, offSocketOpen, offUserCaptureScreen, onAccelerometerChange, onBLECharacteristicValueChange, onBLEConnectionStateChanged, onBeaconServiceChange, onBeaconUpdate, onBluetoothAdapterStateChange, onBluetoothDeviceFound, onCompassChange, onGyroscopeChange, onMemoryWarning, onNetworkStatusChange, onSocketClose, onSocketError, onSocketMessage, onSocketOpen, onUserCaptureScreen, openBluetoothAdapter, openCardDetail, openCardList, openKBVoucherDetail, openLocation, openMerchantCardList, openMerchantTicketList, openMerchantVoucherList, openSetting, openTicketDetail, openTicketList, openVoucherDetail, openVoucherList, optionsSelect, pageScrollTo, previewImage, prompt, reLaunch, readBLECharacteristicValue, redirectTo, removeSavedFile, removeStorage, removeStorageSync, removeTabBarBadge, reportAnalytics, request, rsa, saveFile, saveImage, scan, sendSocketMessage, setBackgroundColor, setBackgroundTextStyle, setCanPullDown, setClipboard, setKeepScreenOn, setNavigationBar, setOptionMenu, setScreenBrightness, setStorage, setStorageSync, setTabBarBadge, setTabBarItem, setTabBarStyle, showActionSheet, showAuthGuide, showLoading, showNavigationBarLoading, showSharePanel, showTabBar, showTabBarRedDot, showToast, startBeaconDiscovery, startBluetoothDevicesDiscovery, startPullDownRefresh, startZMVerify, stopBeaconDiscovery, stopBluetoothDevicesDiscovery, stopPullDownRefresh, switchTab, textRiskIdentification, tradePay, uploadFile, vibrate, vibrateLong, vibrateShort, watchShake, writeBLECharacteristicValue };
