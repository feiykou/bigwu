<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/31 0031
 * Time: 下午 15:46
 */

namespace app\home\controller;


use think\Controller;

class Index extends Controller
{
    public function index(){
        return $this->fetch();
    }
    public function detail(){
        return $this->fetch();
    }
    public function product(){
        return $this->fetch();
    }
    public function about(){
        return $this->fetch();
    }
    public function contact(){
        return $this->fetch();
    }
    public function map(){
        return $this->fetch();
    }

}
