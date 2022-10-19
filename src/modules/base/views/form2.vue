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

<script lang="ts" name="form-form2" setup>
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
			label: "性别",
			prop: "gender",
			component: {
				name: "el-radio-group",
				options: [
					{ label: "男", value: 0 },
					{ label: "女", value: 1, color: "#67C23A" }
				]
			},
			value: 0,
			required: true
		},
		{
			label: "婚姻状况",
			prop: "marriage",
			component: {
				name: "el-radio-group",
				options: [
					{ label: "未婚", value: 0 },
					{ label: "已婚", value: 1, color: "#67C23A" },
					{ label: "离异", value: 2, color: "#E6A23C" }
				]
			},
			value: 0,
			required: true
		},
		{
			label: "管理经验",
			prop: "experience",
			component: {
				name: "el-radio-group",
				options: [
					{ label: "无", value: 0 },
					{ label: "有", value: 1, color: "#67C23A" }
				]
			},
			value: 0,
			required: true
		},
		{ label: "资产总值", prop: "assets", required: true, component: { name: "el-input" } },
		{ label: "国籍", prop: "country", required: true, component: { name: "el-input" } },
		{ label: "居住地", prop: "residence", required: true, component: { name: "el-input" } },
		{
			label: "提供证明2年管理经验",
			prop: "proof",
			component: {
				name: "el-radio-group",
				options: [
					{ label: "愿意提供", value: 0 },
					{ label: "不愿意", value: 1, color: "#67C23A" }
				]
			},
			value: 0,
			required: true
		},
		{
			label: "有移民律师",
			prop: "lawyer",
			component: {
				name: "el-radio-group",
				options: [
					{ label: "无", value: 0 },
					{ label: "有", value: 1, color: "#67C23A" }
				]
			},
			value: 0,
			required: true
		},
		{
			label: "如何联系",
			prop: "contact",
			component: {
				name: "el-radio-group",
				options: [
					{ label: "电话", value: 0 },
					{ label: "邮件", value: 1, color: "#67C23A" },
					{ label: "传真", value: 2, color: "#E6A23C" }
				]
			},
			value: 0,
			required: true
		},
		{
			label: "您是如何知道我们的",
			prop: "know",
			component: {
				name: "el-radio-group",
				options: [
					{ label: "谷歌", value: 0 },
					{ label: "个人推荐", value: 1, color: "#67C23A" },
					{ label: "顾问推荐", value: 2, color: "#E6A23C" }
				]
			},
			value: 0,
			required: true
		},
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
		{
			label: "性别",
			prop: "gender",
			dict: [
				{ label: "男", value: 0 },
				{ label: "女", value: 1, color: "#67C23A" }
			]
		},
		{
			label: "婚姻状况",
			prop: "marriage",
			dict: [
				{ label: "未婚", value: 0 },
				{ label: "已婚", value: 1, color: "#67C23A" },
				{ label: "离异", value: 2, color: "#E6A23C" }
			]
		},
		{
			label: "管理经验",
			prop: "experience",
			dict: [
				{ label: "无", value: 0 },
				{ label: "有", value: 1, color: "#67C23A" }
			]
		},
		{ label: "资产总值", prop: "assets" },
		{ label: "国籍", prop: "country" },
		{ label: "居住地", prop: "residence" },
		{
			label: "提供证明2年管理经验",
			prop: "proof",
			dict: [
				{ label: "愿意提供", value: 0 },
				{ label: "不愿意", value: 1, color: "#67C23A" }
			]
		},
		{
			label: "有移民律师",
			prop: "lawyer",
			dict: [
				{ label: "无", value: 0 },
				{ label: "有", value: 1, color: "#67C23A" }
			]
		},
		{
			label: "如何联系",
			prop: "contact",
			dict: [
				{ label: "电话", value: 0 },
				{ label: "邮件", value: 1, color: "#67C23A" },
				{ label: "传真", value: 2, color: "#E6A23C" }
			]
		},
		{
			label: "您是如何知道我们的",
			prop: "know",
			dict: [
				{ label: "谷歌", value: 0 },
				{ label: "个人推荐", value: 1, color: "#67C23A" },
				{ label: "顾问推荐", value: 2, color: "#E6A23C" }
			]
		},
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
		service: service.form.form2
	},
	(app) => {
		app.refresh();
	}
);
</script>
