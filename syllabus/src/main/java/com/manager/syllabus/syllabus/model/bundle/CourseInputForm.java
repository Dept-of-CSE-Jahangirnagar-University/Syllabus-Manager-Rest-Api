package com.manager.syllabus.syllabus.model.bundle;

import com.manager.syllabus.syllabus.model.contents.CourseInputFormSection;
import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Comparator;
import java.util.SortedSet;
import java.util.TreeSet;


@Setter
@ToString
@AllArgsConstructor
@XmlRootElement(name = "courseInputForm")
public class CourseInputForm {

    private SortedSet<CourseInputFormSection> courseInputFormSectionList;

    public CourseInputForm() {
        this.courseInputFormSectionList =
                new TreeSet<CourseInputFormSection>(
                        Comparator.comparing(CourseInputFormSection::getSerialId)
                );
    }

    @XmlElementWrapper(name = "courseInputFormSections")
    @XmlElement(name = "courseInputFormSection")
    public SortedSet<CourseInputFormSection> getCourseInputFormSectionList() {
        return courseInputFormSectionList;
    }

    /**
     * @param courseInputFormSection
     */
    public void addCourseInputFormSection(CourseInputFormSection courseInputFormSection) {
        if (this.courseInputFormSectionList.isEmpty()) {
            this.courseInputFormSectionList =
                    new TreeSet<CourseInputFormSection>(
                            Comparator.comparing(CourseInputFormSection::getSerialId)
                    );
        }
        this.courseInputFormSectionList.add(courseInputFormSection);
    }
}
