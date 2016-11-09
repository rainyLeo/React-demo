import React from 'react';
import {
  Form,
  Input,
  Select,
  Checkbox,
  DatePicker,
  Col,
  Radio,
  Button,
  Modal,
  message,
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class myForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  // 选择select
  handleSelectChange = (value) => {
    console.log(`selected ${value}`);
  }

  // 提交表单
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());

    this.props.form.resetFields();
  }

  // 显示弹框
  showModal = () => {
    this.setState({visible: true});
  }

  // 隐藏弹框
  hideModal = () => {
    this.setState({visible: false});
  }

  render() {
    const {getFieldProps} = this.props.form;

    const formItemLayout = {
      labelCol: {
        span: 3
      },
      wrapperCol: {
        span: 6
      },
    };

    const success = function() {
      message.success('操作成功!');
    };

    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormItem id="control-input" label="用户名" {...formItemLayout} required>
          <Input id="control-input" placeholder="Please enter..." {...getFieldProps('userName')} />
        </FormItem>

        <FormItem label="出生年月" labelCol={{
          span: 3
        }} required>
          <Col span="2">
            <FormItem>
              <DatePicker {...getFieldProps('startDate')} />
            </FormItem>
          </Col>
          <Col span="1">
            <p className="ant-form-split">-</p>
          </Col>
          <Col span="2">
            <FormItem>
              <DatePicker {...getFieldProps('endDate')} />
            </FormItem>
          </Col>
        </FormItem>


        <FormItem id="select" label="年龄" {...formItemLayout}>
          <Select id="select" size="large" defaultValue="lucy" style={{
            width: 200
          }} onChange={this.handleSelectChange} {...getFieldProps('people')}>
            <Option value="10" selected>10-20</Option>
            <Option value="20">20-30</Option>
            <Option value="30">30-40</Option>
          </Select>
        </FormItem>

        <FormItem label="爱好" {...formItemLayout}>
          <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkboxItem1')}>读书</Checkbox>
          <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkboxItem2')}>爬山</Checkbox>
          <Checkbox className="ant-checkbox-inline" {...getFieldProps('checkboxItem3')}>游泳</Checkbox>
        </FormItem>

        <FormItem label="评价" {...formItemLayout}>
          <RadioGroup defaultValue="b" {...getFieldProps('radioItem')}>
            <Radio value="a">A</Radio>
            <Radio value="b">B</Radio>
            <Radio value="c">C</Radio>
            <Radio value="d">D</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem id="control-textarea" label="意见" {...formItemLayout}>
          <Input type="textarea" id="control-textarea" rows="3" {...getFieldProps('content')} />
        </FormItem>

        <FormItem wrapperCol={{
          span: 6,
          offset: 3,
        }} style={{
          marginTop: 24
        }}>
          <Button type="primary" htmlType="submit" onClick={success}>确定</Button>

        </FormItem>
        <Modal title="登录" visible={this.state.visible} onOk={this.hideModal} onCancel={this.hideModal}>
          这是一个modal
        </Modal>
      </Form>
    );
  }
}

myForm = Form.create()(myForm);

export default myForm;