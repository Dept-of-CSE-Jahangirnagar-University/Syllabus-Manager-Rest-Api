package com.manager.syllabus.syllabus.model.contents;

import lombok.*;

import javax.xml.bind.annotation.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@XmlRootElement(name = "table")
@XmlType(propOrder = {"title", "fields", "rows"})
public class Table implements Serializable {

    private Integer tableId;

    private String title;

    private List<String> fields = new ArrayList<>();

    private List<TableRow> rows = new ArrayList<>();

    public Table(String title, List<String> fields) {
        this.title = title;
        this.fields = fields;
        this.rows = new ArrayList<>();
    }

    /**
     * Getters for xml mapping
     */
    @XmlAttribute(name = "contentId")
    public Integer getTableId() {
        return tableId;
    }

    public String getTitle() {
        return title;
    }

    @XmlElementWrapper(name = "fields")
    @XmlElement(name = "field")
    public List<String> getFields() {
        return fields;
    }

    @XmlElementWrapper(name = "rows")
    @XmlElement(name = "row")
    public List<TableRow> getRows() {
        return rows;
    }

    /**
     * Add a new field
     */
    public void addNewField() {
        if (this.fields == null) {
            this.fields = new ArrayList<>();
        }
        this.fields.add("New Field");

        if (this.rows == null) {
            this.rows = new ArrayList<>();
        }
        for (TableRow row : this.rows) {
            row.addCell();
        }
    }

    /**
     * @param fieldNo
     */
    public void deleteField(int fieldNo) {
        if (this.fields == null) {
            this.fields = new ArrayList<>();
        }
        if (fieldNo >= this.fields.size()) {
            return;
        }
        this.fields.remove(fieldNo);

        if (this.rows == null) {
            this.rows = new ArrayList<>();
        }
        for (TableRow row : this.rows) {
            row.deleteCell(fieldNo);
        }
    }

    /**
     * @param rowId
     */
    public void addRow(int rowId) {
        if (this.rows == null) {
            this.rows = new ArrayList<>();
        }
        TableRow tableRow = new TableRow();
        tableRow.setTableRowId(rowId);
        for (int i = 0; i < this.fields.size(); i++) {
            tableRow.addCell();
        }
        this.rows.add(tableRow);
    }

    /**
     * @param tableId
     * @return Table
     */
    public Table getInitialTable(Integer tableId) {
        Table table = new Table();
        table.setTableId(tableId);
        table.setTitle("Untitled Table");
        table.addNewField();

        return table;
    }
}
