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

<script lang="ts" name="form-form3" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";

const { service } = useCool();

// cl-upsert 配置
const Upsert = useUpsert({
	items: [
		{ label: "姓名", prop: "name", required: true, component: { name: "el-input" } },
		{ label: "电话", prop: "phone", required: true, component: { name: "el-input" } },
		{ label: "邮箱", prop: "email", required: true, component: { name: "el-input" } },
		{ label: "活动国家", prop: "country", required: true, component: { name: "el-input" } },
		{ label: "目标市场", prop: "market", required: true, component: { name: "el-input" } },
		{
			label: "对哪国的移民计划感兴趣？",
			prop: "interest",
			required: true,
			component: { name: "el-input" }
		},
		{
			label: "您的职业",
			prop: "occupation",
			component: {
				name: "el-select",
				options: [
					{ label: "律师", value: 0 },
					{ label: "会计", value: 1, color: "#67C23A" },
					{ label: "移民顾问", value: 2, color: "#E6A23C" },
					{ label: "金融机构", value: 3, color: "#F56C6C" },
					{ label: "其他", value: 4, color: "#909399" }
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
		{ label: "活动国家", prop: "country" },
		{ label: "目标市场", prop: "market" },
		{ label: "对哪国的移民计划感兴趣？", prop: "interest" },
		{
			label: "您的职业",
			prop: "occupation",
			dict: [
				{ label: "律师", value: 0 },
				{ label: "会计", value: 1, color: "#67C23A" },
				{ label: "移民顾问", value: 2, color: "#E6A23C" },
				{ label: "金融机构", value: 3, color: "#F56C6C" },
				{ label: "其他", value: 4, color: "#909399" }
			]
		},
		{
			label: "您希望我们如何联系",
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
		service: service.form.form3
	},
	(app) => {
		app.refresh();
	}
);
</script>
