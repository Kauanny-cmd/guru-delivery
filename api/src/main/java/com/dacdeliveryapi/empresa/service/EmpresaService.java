package com.dacdeliveryapi.empresa.service;

import com.dacdeliveryapi.empresa.model.Empresa;
import com.dacdeliveryapi.empresa.cardapio.model.Cardapio;
import com.dacdeliveryapi.empresa.cardapio.repository.CardapioRepository;
import com.dacdeliveryapi.empresa.repository.EmpresaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EmpresaService {

    @Autowired
    private EmpresaRepository repository;

    @Autowired
    private CardapioRepository cardapioRepository;
    @Transactional(propagation = Propagation.REQUIRED)
    public Empresa save(Empresa empresa){

        Empresa empresaSalva = repository.save(empresa);

        Cardapio cardapio = new Cardapio();
        cardapio.setEmpresa(empresaSalva);

        Cardapio cardapioSalvo = cardapioRepository.save(cardapio);
        empresaSalva.setCardapio(cardapioSalvo);

        return empresaSalva;
    }
}
