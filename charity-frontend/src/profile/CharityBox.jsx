import React from 'react';
import { Card, Descriptions } from 'antd';

const { Meta } = Card;

const CharityBox = props =>
    <Card
        style={{ width: '15%', marginLeft: '2.5%', marginRight: '2.5%', marginBottom: '5%' }}
        hoverable
        cover={
        <img
            alt="logo"
            src={props.logo}
        />
        }
    >
        <Meta
            description={
                <Descriptions title={props.name} column={1}>
                    <Descriptions.Item label='Timestamp'>{new Date(props.timestamp).toDateString()}</Descriptions.Item>
                    <Descriptions.Item label='Amount'>{`$${parseInt(props.amount).toFixed(2)}`}</Descriptions.Item>
                    {props.spending ?
                        <Descriptions.Item label='Categories'>
                            {props.spending.join(', ')}
                        </Descriptions.Item>
                    : null}
                </Descriptions>
            }
        />
    </Card>

export default CharityBox;
