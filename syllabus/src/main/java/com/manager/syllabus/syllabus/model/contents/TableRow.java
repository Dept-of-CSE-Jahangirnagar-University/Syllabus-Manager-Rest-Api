package com.manager.syllabus.syllabus.model.contents;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@XmlRootElement(name = "row")
public class TableRow implements Serializable {

    private Integer tableRowId;

    private List<String> cells = new ArrayList<>();

    /**
     * Getters for xml mapping
     */
    @XmlAttribute(name = "tableRowId")
    public Integer getTableRowId() {
        return tableRowId;
    }

    @XmlElementWrapper(name = "cells")
    @XmlElement(name = "cell")
    public List<String> getCells() {
        return cells;
    }

}
