<template>
	<cl-crud ref="Crud">
		<el-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<cl-flex1 />
			<!-- 关键字搜索 -->
			<cl-search-key />
		</el-row>

		<el-row>
			<!-- 数据表格 -->
			<cl-table ref="Table" />
		</el-row>

		<el-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</el-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" name="form-form1" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";

const { service } = useCool();

// cl-upsert 配置
const Upsert = useUpsert({
	items: [
		{ label: "姓名", prop: "name", required: true, component: { name: "el-input" } },
		{ label: "电话", prop: "phone", required: true, component: { name: "el-input" } },
		{ label: "邮箱", prop: "email", required: true, component: { name: "el-input" } },
		{
			label: "问题或意见",
			prop: "message",
			component: { name: "el-input", props: { type: "textarea", rows: 4 } },
			required: true
		},
		{
			label: "状态",
			prop: "status",
			component: {
				name: "el-radio-group",
				options: [
					{ label: "未处理", value: 0 },
					{ label: "正在处理", value: 1, color: "#67C23A" },
					{ label: "已处理", value: 2, color: "#E6A23C" }
				]
			},
			value: 0,
			required: true
		},
		{
			label: "备注",
			prop: "remark",
			component: { name: "el-input", props: { type: "textarea", rows: 4 } }
		}
	]
});

// cl-table 配置
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "ID", prop: "id" },
		{ label: "姓名", prop: "name" },
		{ label: "电话", prop: "phone" },
		{ label: "邮箱", prop: "email" },
		{ label: "问题或意见", prop: "message", showOverflowTooltip: true },
		{
			label: "状态",
			prop: "status",
			dict: [
				{ label: "未处理", value: 0 },
				{ label: "正在处理", value: 1, color: "#67C23A" },
				{ label: "已处理", value: 2, color: "#E6A23C" }
			]
		},
		{ label: "备注", prop: "remark", showOverflowTooltip: true },
		{ label: "创建时间", prop: "createTime" },
		{ label: "更新时间", prop: "updateTime" },
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.form.form1
	},
	(app) => {
		app.refresh();
	}
);
</script>
