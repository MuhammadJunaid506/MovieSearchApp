import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import {
  MinusCircleOutlined,
  PlusOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  List,
  Row,
  Col,
  DatePicker,
  Select,
  Upload,
  message,
} from "antd";
import { Editor } from "@tinymce/tinymce-react";
import ReactQuill from "react-quill";
import EditorToolbar, {
  modules,
  formats,
} from "../../components/Editor/EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { Post, Get, Put } from "../../config/api";
import { POSTS, CATEGORY } from "../../config/constants/api";
import moment from "moment";

import UserContext from "../../config/context/user/UserContext";
const { Option } = Select;
const { Dragger } = Upload;
const { TextArea } = Input;

const PostForm = () => {
  const editorRef = useRef(null);
  const [postForm] = Form.useForm();
  const navigate = useNavigate();
  const id = window.location.pathname.split("/")[3];
  const { user, token } = useContext(UserContext);
  const [categories, setCatgories] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    tags: "",
    content: "",
    postDate: new Date(),
    meta: "",
    picture: "",
  });

  console.log("formData", formData);
  useEffect(() => {
    getCategories();
    if (id) {
      console.log("ID FOUND", id);
      getPost();
    }
  }, []);



  const getCategories = () => {
    try {
      Get(CATEGORY.get)
        .then((response) => {
          if (response.status) {
            setCatgories(response.data);
          } else {
            console.log(response.data.message);
            message.error(
              response?.message ? response.message : "Something went wrong"
            );
          }
        })
        .catch((error) => {
          console.log(error.message);
          message.error(error.message ? error.message : "Something went wrong");
        });
    } catch (error) {
      message.error(error.message ? error.message : "Something went wrong");
    }
  };

  const getPost = () => {
    try {
      Get(`${POSTS.get}/${id}`, token)
        .then((response) => {
          if (response.status) {
            console.log("response", response);
            setFormData({
              ...response.data,
              category: response.data.category,
            });
            postForm.setFieldsValue({
              category: response.data.category,
              postDate: new Date(response.data.postDate),
              meta: response.data.meta,
            });
          } else {
            message.error(
              response.message ? response.message : "Something went wrong"
            );
          }
        })
        .catch((error) => {
          message.error(error.message ? error.message : "Something went wrong");
        });
    } catch (error) {
      message.error(error.message ? error.message : "Something went wrong");
    }
  };

  const onFinish = () => {
    if (id) {
      updatePost();
    } else {
      savePost();
    }
  };

  const savePost = () => {
    const formObject = new FormData();
    let _formData = {
      ...formData
  }
  if (moment(formData.postDate).isAfter(moment())) {
      _formData.status = "scheduled";
  } else {
      _formData.status = "active";
  }
  console.log("Received values of form: ", formData);
  formObject.set("title", _formData.title);
  formObject.set("category", _formData.category);
  formObject.set("tags", _formData.tags);
  formObject.set("content", _formData.content);
  formObject.set("postDate", _formData.postDate);
  formObject.set("meta", _formData.meta);
  formObject.set("status", _formData.status);
  formObject.set("image", _formData.picture);
    
    try {
      Post(POSTS.save, formObject, token)
        .then((response) => {
          console.log(response);
          if (response.status) {
            message.success("Post saved successfully!");
            navigate("/posts");
          } else {
            message.error(
              response.message ? response.message : "Something went wrongs"
            );
          }
        })
        .catch((error) => {
          message.error(error.message ? error.message : "Something went wrong");
        });
    } catch (error) {
      message.error(error.message);
    }
  };

  const updatePost = () => {
    const formObject = new FormData();
      let _formData = {
        ...formData
    }
    if (moment(formData.postDate).isAfter(moment())) {
        _formData.status = "scheduled";
    } else {
        _formData.status = "active";
    }
    console.log("Received values of form: ", formData);
    formObject.set("title", _formData.title);
    formObject.set("category", _formData.category);
    formObject.set("tags", _formData.tags);
    formObject.set("content", _formData.content);
    formObject.set("postDate", _formData.postDate);
    formObject.set("meta", _formData.meta);
    formObject.set("status", _formData.status);
    try {
      Put(`${POSTS.save}/${id}`, token, formObject)
        .then((response) => {
          console.log(response);
          if (response.status) {
            message.success("Post updated successfully!");
            navigate("/posts");
          } else {
            message.error(
              response.message ? response.message : "Something went wrongs"
            );
          }
        })
        .catch((error) => {
          message.error(error.message ? error.message : "Something went wrong");
        });
    } catch (error) {
      message.error(error.message);
    }
  };

  const getValue = () => {
    if (editorRef.current) {
      setFormData((prevState) => ({
        ...prevState,
        content: editorRef.current.getContent(),
      }));
      console.log(editorRef.current.getContent());
    }
  };

  const handleDateChange = (date, dateString) => {
    console.log(date, dateString);
    setFormData((prevState) => ({
      ...prevState,
      postDate: dateString,
    }));
  };

  console.log("formData", formData);

  return (
    <Form form={postForm} layout="vertical" onFinish={onFinish}>
      <Row gutter={[16, 0]}>
        <Col span={12} style={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
          <Row>
            <Form.Item label="Post Title" required style={{width:'100%'}}>
              <Input
                placeholder="Enter plan title"
                value={formData?.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item name="category" label="Category" style={{width:'100%'}} required>
              <Select
                placeholder="Select Category"
                onChange={(value) =>
                  setFormData({ ...formData, category: value })
                }
                allowClear
                defaultValue={categories.filter(
                  (item) => item.id === formData?.category
                )}
              >
                {categories?.map((category) => (
                  <Option key={category._id} value={category._id}>
                    {category.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="Tags" required style={{width:'100%'}}>
              <Input
                placeholder="Enter tags (comma seprated)"
                value={formData?.tags}
                onChange={(e) =>
                  setFormData({ ...formData, tags: e.target.value.split(",") })
                }
              />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="Post Date" style={{width:'100%'}} required>
              <DatePicker
                style={{ width: "100%" }}
                value={moment(formData?.postDate)}
                format={"DD MMMM YYYY"}
                placeholder="Enter Post Date"
                onChange={handleDateChange}
              />
            </Form.Item>
          </Row>
        </Col>
        <Col span={12}>
          <Col span={24}>
            <Form.Item name="image" label="Image" required>
              <Dragger
                style={{ minHeight: "204px" }}
                name="image"
                multiple={false}
                maxCount={1}
                beforeUpload={(file, fileList) => {
                    setFormData({ ...formData, picture:fileList[0]})
                    return false;
                }}>
              
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from
                  uploading company data or other band files
                </p>
              </Dragger>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="meta" label="Meta" required>
              <TextArea
                rows={4}
                value={formData?.meta}
                onChange={(e) =>
                  setFormData({ ...formData, meta: e.target.value })
                }
              />
            </Form.Item>
          </Col>
        </Col>
      </Row>


      <Row>
        <Col span={24}>
          <Form.Item label="Content" required>
            <div className="text-editor">
              <Editor
                apiKey="6xlty34xm616k1abervqouob3yxh6klmxoxgc0gjrkc4gt1u"
                onEditorChange={() => getValue()}
                onInit={(evt, editor) => (editorRef.current = editor)}
                value={formData.content}
                // onchange_callback={myCustomOnChangeHandler}
                init={{
                  selector: "textarea#full-featured",
                  plugins:
                    "preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker help formatpainter permanentpen pageembed charmap tinycomments mentions quickbars linkchecker emoticons advtable export",
                  mobile: {
                    plugins:
                      "preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker help formatpainter pageembed charmap mentions quickbars linkchecker emoticons advtable",
                  },
                  menu: {
                    tc: {
                      title: "Comments",
                      items: "addcomment showcomments deleteallconversations",
                    },
                  },
                  menubar: "file edit view insert format tools table tc help",
                  toolbar:
                    "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment",
                  autosave_ask_before_unload: true,
                  autosave_interval: "30s",
                  autosave_prefix: "{path}{query}-{id}-",
                  autosave_restore_when_empty: false,
                  autosave_retention: "2m",
                  image_advtab: true,

                  importcss_append: true,
                  templates: [
                    {
                      title: "New Table",
                      description: "creates a new table",
                      content:
                        '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
                    },
                    {
                      title: "Starting my story",
                      description: "A cure for writers block",
                      content: "Once upon a time...",
                    },
                    {
                      title: "New list with dates",
                      description: "New List with dates",
                      content:
                        '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
                    },
                  ],
                  template_cdate_format:
                    "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
                  template_mdate_format:
                    "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
                  height: 600,
                  image_caption: true,
                  quickbars_selection_toolbar:
                    "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
                  toolbar_mode: "sliding",
                  spellchecker_ignore_list: ["Ephox", "Moxiecode"],
                  tinycomments_mode: "embedded",
                  content_style: ".mymention{ color: gray; }",
                  contextmenu: "link image table configurepermanentpen",
                  a11y_advanced_options: true,
                  skin: "oxide",
                  content_css: "default",
                  mentions_selector: ".mymention",
                  mentions_item_type: "profile",
                }}
              />
            </div>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 0]}>
        <Col span={12}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default PostForm;
