import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Form, CampInput, Input, Select } from './styles';

import Button from '../button';

export default function ContactField({ onSubmit }){
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        selecione: '',
        instagram: '',
        afiliado: '',
        link: '',
    });
    const [emptyFields, setEmptyFields] = useState({
        nome: false,
        email: false,
        telefone: false,
    });  
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }; 
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.nome === '' || formData.email === '' || formData.telefone === '') {
            alert('Preencha todos os campos obrigatórios antes de enviar o formulário.');
            return;
        }
        onSubmit();
        // Você pode fazer algo com os dados aqui, por exemplo, enviar para um servidor

        console.log(formData);
    };
    const handleBlur = (field) => {
        setEmptyFields({
            ...emptyFields,
            [field]: true,
        });
    };
    function renderCargoCasaApostasSelect(){
        if (formData.selecione === '3') {  
            return (
                <CampInput>
                    <label>Qual o site da sua casa?</label>
                    <Input
                        type='text'
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                    />
                </CampInput> 
            );
        } else if (formData.selecione !== ''){
            return(
                <CampInput>
                    <label>Você já trabalha como afiliado?</label>
                    <Select
                        name="afiliado"
                        value={formData.afiliado}
                        onChange={handleChange}
                    >
                        <option value="" defaultValue={''} disabled>Selecione</option>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                    </Select>
                </CampInput>
            );
        }
    }
    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <CampInput>
                    <label>Nome<span>*</span></label>
                    <Input
                        type='text'
                        name='nome'
                        value={formData.nome}
                        onChange={handleChange}
                        onBlur={() => handleBlur('nome')}
                        data-haserror={emptyFields.nome && formData.nome === ''}
                    />
                    {emptyFields.nome && formData.nome === '' ? (
                        <small>Preencha esse campo obrigatório.</small>
                    ) : ''}
                </CampInput>

                <CampInput>
                    <label>E-mail<span>*</span></label>
                    <Input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur('email')}
                        data-haserror={emptyFields.email && formData.email === ''}
                    />
                    {emptyFields.email && formData.email === '' ? (
                        <small>Preencha esse campo obrigatório.</small>
                    ) : ''}
                </CampInput>

                <CampInput>
                    <label>Número de telefone<span>*</span></label>
                    <Input
                        placeholder='Seu telefone com DDD'
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        onBlur={() => handleBlur('telefone')}
                        data-haserror={emptyFields.telefone && formData.telefone === ''}
                    />
                    {emptyFields.telefone && formData.telefone === '' ? (
                        <small>Preencha esse campo obrigatório.</small>
                    ) : ''}
                </CampInput>

                <CampInput>
                    <label>Qual opção te define melhor?*</label>
                    <Select
                        name="selecione"
                        value={formData.selecione}
                        onChange={handleChange} 
                    >
                        <option value="" defaultValue={''} disabled>Selecione uma opção</option>
                        <option value="1">Já sou afiliado</option>
                        <option value="2">Sou Apostador</option>
                        <option value="3">Trabalho em uma casa de apostas</option>
                        <option value="4">Sou gestor de tráfego</option>
                        <option value="5">Sou influenciador</option>
                        <option value="6">Sou infoprodutor</option>
                        <option value="7">Sou tipster</option>
                        <option value="8">Outro</option>
                    </Select>
                </CampInput>

                {renderCargoCasaApostasSelect()}

                <CampInput>
                    <label>Instagram</label>
                    <Input
                        placeholder='Qual seu instagram?'
                        type="text"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                    />
                </CampInput>

                <Button type="submit">Enviar</Button>
            </Form>
        </Container>
    );
}
ContactField.propTypes = {
    onSubmit: PropTypes.func
};