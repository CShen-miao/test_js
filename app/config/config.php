<?php

# smarty
define('REAL_PATH',dirname(__FILE__));
require(REAL_PATH.'/../../vendor/smarty/smarty/libs/Smarty.class.php');
$_smarty = new Smarty();

$_smarty->setCacheDir(REAL_PATH.'/../../runtime/smarty/cache/'); #缓存目录
$_smarty->setConfigDir(REAL_PATH.'/config/'); #配置目录
$_smarty->setPluginsDir(REAL_PATH.'/../../public/Public/smarty/plugin/'); #模板扩充插件目录
$_smarty->setTemplateDir(REAL_PATH.'/../Admin/Tpl/'); #模板路径
$_smarty->setCompileDir(REAL_PATH.'/../../runtime/smarty/view_c/'); #编译后的文件路径

# 将默认定界符{}修改为<{}>
$_smarty->setLeftDelimiter('<{');
$_smarty->left_delimiter = '<{';
$_smarty->right_delimiter = '}>';

# 添加 smarty 自带的插件库
$_smarty->addPluginsDir(REAL_PATH.'/../../vendor/smarty/smarty/libs/plugins/');

# 检测 smarty 目录结构配置是否有效
# $_smarty->testInstall();
