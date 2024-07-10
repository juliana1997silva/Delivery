package br.com.juliana.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import br.com.juliana.controllers.PersonController;
import br.com.juliana.data.vo.v1.PersonVO;
import br.com.juliana.data.vo.v2.PersonVOV2;
import br.com.juliana.exceptions.ResourceNotFoundException;
import br.com.juliana.mapper.DozerMapper;
import br.com.juliana.mapper.custom.PersonMapper;
import br.com.juliana.model.Person;
import br.com.juliana.repositories.PersonRepository;

// serve para que o spring boot reconhece esse arquivo como um service
//é no arquivo services que é realizada a chamada ao banco de dados
@Service
public class PersonServices {

    @Autowired
    PersonRepository repository;

    @Autowired
    PersonMapper mapper;

    // lista todos os registros
    public List<PersonVO> findAll() {

        var persons = DozerMapper.parseListObject(repository.findAll(), PersonVO.class);
        persons
                .stream()
                .forEach(p -> p.add(linkTo(methodOn(PersonController.class).findById(p.getKey())).withSelfRel()));
        return persons;
    }

    // lista o registro com o ID informado
    public PersonVO findById(@NonNull Long id) {
        var entity = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Nenhum registro encontrado"));
        PersonVO vo = DozerMapper.parseObject(entity, PersonVO.class);
        vo.add(linkTo(methodOn(PersonController.class).findById(id)).withSelfRel());
        return vo;
    }

    // cria um registro versão VO 1
    public PersonVO create(@NonNull PersonVO person) {
        // recebemos um VO, convertamos esse vo para entidade do tipo person, salva os
        // dados no banco e
        // pega o resultado e passa para um objeto vo
        var entity = DozerMapper.parseObject(person, Person.class);
        PersonVO vo = DozerMapper.parseObject(repository.save(entity), PersonVO.class);
        vo.add(linkTo(methodOn(PersonController.class).findById(vo.getKey())).withSelfRel());
        return vo;
    }

    // cria um registro versão VO 2 utilizando um mapper customizado
    public PersonVOV2 createV2(@NonNull PersonVOV2 person) {
        var entity = mapper.convertEntityVoToEntity(person);
        return mapper.convertEntityToVo(repository.save(entity));
    }

    // atualiza o registro
    public PersonVO update(PersonVO person) {
        Long id = person.getKey();

        // Verifica se o ID é nulo
        if (id == null) {
            throw new IllegalArgumentException("ID não pode ser nulo");
        }

        var optionalEntity = repository.findById(id);

        if (optionalEntity.isPresent()) {

            var entity = optionalEntity.get();

            entity.setFirstName(person.getFirstName());
            entity.setLastName(person.getLastName());
            entity.setAddress(person.getAddress());
            entity.setGender(person.getGender());

            var vo = DozerMapper.parseObject(repository.save(entity), PersonVO.class);
            vo.add(linkTo(methodOn(PersonController.class).findById(vo.getKey())).withSelfRel());
            return vo;

        } else {

            throw new ResourceNotFoundException("Nenhum registro encontrado");
        }
    }

    public void delete(@NonNull Long id) {
        // Ensure null safety by checking if findById returns null
        var entity = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Nenhum registro encontrado"));

        // Add a null check to handle the case where findById returns null
        if (entity != null) {
            repository.delete(entity);
        } else {
            throw new ResourceNotFoundException("Nenhum registro encontrado");
        }
    }
}
