import React, { FC, useImperativeHandle, useState, useCallback, useMemo } from 'react';
import { Form, Radio, Checkbox, Tooltip } from 'antd';
import Upload from '../../../../a-components/upload';
import './index.scss';
import '../../../../styles/form.scss';

const Index: FC<{ childRef: any }> = ({ childRef }) => {
    const [form] = Form.useForm();
    const [shareImg, setShareImg] = useState<string>('');
    const [liveImg, setLiveImg] = useState<string>('');
    const [bgImg, setBgImg] = useState<string>('');
    const changeImg = useCallback((src: string, type: string) => {
        switch (type) {
            case '1':
                setShareImg(src);
                break;
            case '2':
                setLiveImg(src);
                break;
            case '3':
                setBgImg(src);
                break;
            default:
                break;
        }
    }, []);
    const useShareUpload = useMemo(() => 
        <Upload img={shareImg} changeImg={(src) => changeImg(src, '1')} title="上传图片"/>, 
    [changeImg, shareImg]);
    const useLiveUpload = useMemo(() => 
        <Upload img={liveImg} changeImg={(src) => changeImg(src, '2')} title="上传图片"/>, 
    [changeImg, liveImg]);
    const useBgUpload = useMemo(() => 
        <Upload img={bgImg} changeImg={(src) => changeImg(src, '3')} title="上传图片"/>, 
    [changeImg, bgImg]);
    useImperativeHandle(childRef, () => ({
        getData: () => {
            return ({
                name: '1234'
            })
        }
    }));
    return <div style={{marginBottom: 30}} className="default_form step_form_form">
        <Form
                name="basic"
                form={form}
                initialValues={{ remember: true }}
            >
                <Form.Item
                    label="分享卡片封面"
                    extra="观众在微信对话框内分享的直播间将以分享卡片的形式呈现。建议尺寸：800像素*640像素，图片大小不得超过1M。"
                    className="p_l_84 head_pic"
                >
                    { useShareUpload }
                </Form.Item>
                <Form.Item
                    label="直播卡片封面"
                    className="p_l_84 head_pic"
                >
                    <div className="step_form_content_aswarning">
                        { useLiveUpload }
                        <p>
                            官方推荐的小程序直播将会出现在购物直播频道内。
                            <span>了解购物直播频道</span>
                        </p>
                        <p>
                            图片建议大小为800像素*800像素。图片大小不超过100KB。图片内容遵循平台规范后更容易被推荐。
                            <span>了解平台规范</span>
                        </p>
                    </div>
                </Form.Item>
                <Form.Item
                    label="直播间背景墙"
                    className="p_l_84 head_pic"
                    extra="直播间背景墙是每个直播间的默认背景。建议尺寸：1080像素 * 1920像素。图片大小不得超过2M。"
                >
                    { useBgUpload }
                </Form.Item>
                <Form.Item
                    label="直播间功能"
                    className="p_l_84 head_pic"
                >
                    <Checkbox.Group>
                        <Checkbox value="A" style={{ lineHeight: '32px', marginRight: 25 }}>
                            点赞
                        </Checkbox>
                        <Checkbox value="B" style={{ lineHeight: '32px', marginRight: 25 }}>
                            评论
                        </Checkbox>
                        <Checkbox value="C" style={{ lineHeight: '32px', marginRight: 25 }}>
                            商品货架
                        </Checkbox>
                        <Checkbox value="D" style={{ lineHeight: '32px' }}>
                            分享
                        </Checkbox>
                    </Checkbox.Group>
                    <Tooltip 
                        overlayClassName="step_form_tooltip"
                        title="关闭分享功能后，观众无法分享直播间，关闭分享功能需直播组件更新至1.1.4及以上才可生效" 
                        color="#fff">
                        <img style={{height: 15, display: 'inline-block', verticalAlign: '-3px'}} src={require('../../../../assets/images/tootip.png')} alt=""/>
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="横竖屏显示"
                    className="p_l_84 head_pic"
                >
                    <Radio.Group>
                        <Radio value="a" style={{marginRight: 20}}>竖屏</Radio>
                        <Radio value="b">横屏</Radio>
                    </Radio.Group>
                </Form.Item>
        </Form>
    </div>
}

export default Index;