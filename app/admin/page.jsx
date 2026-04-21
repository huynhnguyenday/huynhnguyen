"use client";

import { useEffect, useState } from "react";

const emptySkill = { name: "", src: "" };
const emptyProject = {
  name: "",
  src: "",
  type: "web",
  descVi: "",
  descEn: "",
  descrip1Vi: "",
  descrip1En: "",
  descrip2Vi: "",
  descrip2En: "",
  img: "",
  tech: "",
  links: "",
};

export default function AdminPage() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skillForm, setSkillForm] = useState(emptySkill);
  const [projectForm, setProjectForm] = useState(emptyProject);
  const [editingSkillId, setEditingSkillId] = useState(null);
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [message, setMessage] = useState("");

  const loadData = async () => {
    const [skillsRes, projectsRes] = await Promise.all([
      fetch("/api/skills", { cache: "no-store" }),
      fetch("/api/projects", { cache: "no-store" }),
    ]);
    const [skillsData, projectsData] = await Promise.all([
      skillsRes.json(),
      projectsRes.json(),
    ]);
    setSkills(Array.isArray(skillsData) ? skillsData : []);
    setProjects(Array.isArray(projectsData) ? projectsData : []);
  };

  useEffect(() => {
    loadData();
  }, []);

  const saveSkill = async (e) => {
    e.preventDefault();
    const method = editingSkillId ? "PUT" : "POST";
    const payload = editingSkillId
      ? { _id: editingSkillId, ...skillForm }
      : { ...skillForm };
    const res = await fetch("/api/skills", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      setSkillForm(emptySkill);
      setEditingSkillId(null);
      setMessage("Lưu skill thành công.");
      loadData();
    } else {
      setMessage("Lưu skill thất bại.");
    }
  };

  const saveProject = async (e) => {
    e.preventDefault();
    const method = editingProjectId ? "PUT" : "POST";
    const payload = {
      ...projectForm,
      img: projectForm.img
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean),
      tech: projectForm.tech
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean),
      links: projectForm.links
        .split(",")
        .map((pair) => pair.trim())
        .filter(Boolean)
        .map((pair) => {
          const [icon, url] = pair.split("|").map((v) => v.trim());
          return { icon, url };
        }),
    };

    const requestBody = editingProjectId
      ? { _id: editingProjectId, ...payload }
      : payload;

    const res = await fetch("/api/projects", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    if (res.ok) {
      setProjectForm(emptyProject);
      setEditingProjectId(null);
      setMessage("Lưu project thành công.");
      loadData();
    } else {
      setMessage("Lưu project thất bại.");
    }
  };

  const deleteSkill = async (id) => {
    await fetch(`/api/skills?id=${id}`, { method: "DELETE" });
    loadData();
  };

  const deleteProject = async (id) => {
    await fetch(`/api/projects?id=${id}`, { method: "DELETE" });
    loadData();
  };

  return (
    <main className="min-h-screen p-6 md:p-10 bg-slate-950 text-white">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {message && <p className="mb-6 text-green-400">{message}</p>}

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <form onSubmit={saveSkill} className="grid md:grid-cols-3 gap-3 mb-5">
          <input
            className="p-3 rounded bg-slate-800"
            placeholder="Tên skill"
            value={skillForm.name}
            onChange={(e) =>
              setSkillForm((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
          <input
            className="p-3 rounded bg-slate-800"
            placeholder="Ảnh skill (vd: /image/react.png)"
            value={skillForm.src}
            onChange={(e) =>
              setSkillForm((prev) => ({ ...prev, src: e.target.value }))
            }
            required
          />
          <button className="p-3 rounded bg-purple-600 hover:bg-purple-500">
            {editingSkillId ? "Cập nhật skill" : "Thêm skill"}
          </button>
        </form>

        <div className="space-y-2">
          {skills.map((skill) => (
            <div
              key={skill._id}
              className="flex items-center justify-between p-3 bg-slate-900 rounded"
            >
              <span>
                {skill.name} - {skill.src}
              </span>
              <div className="space-x-2">
                <button
                  className="px-3 py-1 bg-sky-600 rounded"
                  onClick={() => {
                    setEditingSkillId(skill._id);
                    setSkillForm({ name: skill.name || "", src: skill.src || "" });
                  }}
                >
                  Sửa
                </button>
                <button
                  className="px-3 py-1 bg-red-600 rounded"
                  onClick={() => deleteSkill(skill._id)}
                >
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <form onSubmit={saveProject} className="grid md:grid-cols-2 gap-3 mb-5">
          <input
            className="p-3 rounded bg-slate-800"
            placeholder="Tên project"
            value={projectForm.name}
            onChange={(e) =>
              setProjectForm((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
          <input
            className="p-3 rounded bg-slate-800"
            placeholder="Ảnh cover (src)"
            value={projectForm.src}
            onChange={(e) =>
              setProjectForm((prev) => ({ ...prev, src: e.target.value }))
            }
            required
          />
          <select
            className="p-3 rounded bg-slate-800"
            value={projectForm.type}
            onChange={(e) =>
              setProjectForm((prev) => ({ ...prev, type: e.target.value }))
            }
          >
            <option value="web">web</option>
            <option value="mobile">mobile</option>
          </select>
          <input
            className="p-3 rounded bg-slate-800"
            placeholder="Mô tả ngắn VI"
            value={projectForm.descVi}
            onChange={(e) =>
              setProjectForm((prev) => ({ ...prev, descVi: e.target.value }))
            }
          />
          <input
            className="p-3 rounded bg-slate-800"
            placeholder="Mô tả ngắn EN"
            value={projectForm.descEn}
            onChange={(e) =>
              setProjectForm((prev) => ({ ...prev, descEn: e.target.value }))
            }
          />
          <textarea
            className="p-3 rounded bg-slate-800"
            placeholder="Mô tả dài VI"
            value={projectForm.descrip1Vi}
            onChange={(e) =>
              setProjectForm((prev) => ({ ...prev, descrip1Vi: e.target.value }))
            }
          />
          <textarea
            className="p-3 rounded bg-slate-800"
            placeholder="Mô tả dài EN"
            value={projectForm.descrip1En}
            onChange={(e) =>
              setProjectForm((prev) => ({ ...prev, descrip1En: e.target.value }))
            }
          />
          <textarea
            className="p-3 rounded bg-slate-800"
            placeholder="Mô tả bổ sung VI"
            value={projectForm.descrip2Vi}
            onChange={(e) =>
              setProjectForm((prev) => ({ ...prev, descrip2Vi: e.target.value }))
            }
          />
          <textarea
            className="p-3 rounded bg-slate-800"
            placeholder="Mô tả bổ sung EN"
            value={projectForm.descrip2En}
            onChange={(e) =>
              setProjectForm((prev) => ({ ...prev, descrip2En: e.target.value }))
            }
          />
          <input
            className="p-3 rounded bg-slate-800 md:col-span-2"
            placeholder="List img, ngăn cách dấu phẩy"
            value={projectForm.img}
            onChange={(e) =>
              setProjectForm((prev) => ({ ...prev, img: e.target.value }))
            }
          />
          <input
            className="p-3 rounded bg-slate-800 md:col-span-2"
            placeholder="List tech icon, ngăn cách dấu phẩy"
            value={projectForm.tech}
            onChange={(e) =>
              setProjectForm((prev) => ({ ...prev, tech: e.target.value }))
            }
          />
          <input
            className="p-3 rounded bg-slate-800 md:col-span-2"
            placeholder="Links dạng icon|url,icon|url"
            value={projectForm.links}
            onChange={(e) =>
              setProjectForm((prev) => ({ ...prev, links: e.target.value }))
            }
          />
          <button className="p-3 rounded bg-purple-600 hover:bg-purple-500 md:col-span-2">
            {editingProjectId ? "Cập nhật project" : "Thêm project"}
          </button>
        </form>

        <div className="space-y-2">
          {projects.map((project) => (
            <div
              key={project._id}
              className="flex items-center justify-between p-3 bg-slate-900 rounded"
            >
              <span>
                {project.name} ({project.type})
              </span>
              <div className="space-x-2">
                <button
                  className="px-3 py-1 bg-sky-600 rounded"
                  onClick={() => {
                    setEditingProjectId(project._id);
                    setProjectForm({
                      name: project.name || "",
                      src: project.src || "",
                      type: project.type || "web",
                      descVi: project.descVi || "",
                      descEn: project.descEn || "",
                      descrip1Vi: project.descrip1Vi || "",
                      descrip1En: project.descrip1En || "",
                      descrip2Vi: project.descrip2Vi || "",
                      descrip2En: project.descrip2En || "",
                      img: Array.isArray(project.img) ? project.img.join(", ") : "",
                      tech: Array.isArray(project.tech)
                        ? project.tech.join(", ")
                        : "",
                      links: Array.isArray(project.links)
                        ? project.links
                            .map((item) => `${item.icon || ""}|${item.url || ""}`)
                            .join(", ")
                        : "",
                    });
                  }}
                >
                  Sửa
                </button>
                <button
                  className="px-3 py-1 bg-red-600 rounded"
                  onClick={() => deleteProject(project._id)}
                >
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
